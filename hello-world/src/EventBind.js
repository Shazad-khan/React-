import React, { Component } from 'react'


//types of binding

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }

//   clickHandler(){
//       this.setState({
//           message: "Goodbye!"
//       })

//   }

clickHandler=() => {       //class property as arrow function
    this.setState({
        message: 'Goodbye'
    })
}


    render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}  {/*by using bind keyword*/}
           {/* <button onClick={() => this.clickHandler()}>click</button>   by using arrow function    */}
           <button onClick={this.clickHandler}>click</button> {/*BINDING IN THE CONSTRUCTURE*/ }    
      </div>
    )
  }
}

export default EventBind