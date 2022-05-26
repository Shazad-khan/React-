import React,{ Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMeesage(){
        this.setState({
            message: 'Thankyou for visiting'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMeesage()}>click</button>
            </div>
        )
    }
}

export default Message