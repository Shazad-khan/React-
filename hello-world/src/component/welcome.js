import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        const {name, place} = this.props     //destructuring porps in the render method
        return (
        <h1>
            Welcome {name} , from {place}
        </h1>
        )
    }
}

export default Welcome