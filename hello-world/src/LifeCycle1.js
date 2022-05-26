import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2'

export class LifeCycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'shazad'
      }
      console.log('Lifecycle1 constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle1 getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle1 component')
    }

    shouldComponentUpdate(){
      console.log('Lifecycle1 shouldComponentUpdate')
      return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Lifecycle1 getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('Lifecycle1 componentDidUpdate')
    }

    changeState=()=>{
      this.setState({
        name: 'State changed'
      })
    }
  render() {
      console.log('Lifecycle1 render')
    return (
    <div>
        <div>LifeCycle1</div>
        <button onClick={this.changeState}>change state</button>
         <LifeCycle2 />
    </div>)
  }
}

export default LifeCycle1