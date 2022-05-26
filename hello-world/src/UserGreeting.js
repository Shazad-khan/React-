import React, { Component } from 'react'

// conditional rendering

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }

  render() {

   return this.state.isLoggedIn && <div>Welcome Shazadd</div>      //shorcircuit operator

    // return this.state.isLoggedIn ?(          //ternary operator approach
        // <div>Welcome Shazad</div>
    // ):(
        // <div>Welcome Guest</div>
    // )

    //   let message                        //variable approach
    //   if (this.state.isLoggedIn){
    //       message = <div>Welcome Shazad</div>
    //   }else{
    //       message = <div>Welcome User</div>
    //   }

    //   return <div>{message}</div>        //if else approadh
    //   if(this.state.isLoggedIn){
    //       return <div>Welcome Shazad</div>
    //   }else{
    //       return<div>Welcome Guest</div>
    //   }
    // return (
    //   <div>
    //       <div>welcome Shazad</div>
    //       <div>welcome Guest</div>
    //  </div>
    // )
  }
}

export default UserGreeting