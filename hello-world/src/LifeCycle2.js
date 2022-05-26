import React, { Component } from 'react'

export class LifeCycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'shazad'
      }
      console.log('Lifecycle2 constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle2 getDerivedStateFromProps')
        return null
    }
     

    componentDidMount(){
        console.log('Lifecycle2 component')
    }

    shouldComponentUpdate(){
      console.log('Lifecycle2 shouldComponentUpdate')
      return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Lifecycle2 getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('Lifecycle2 componentDidUpdate')
    }
  render() {
      console.log('Lifecycle2 render')
    return <div>Lifecycle2</div>
  }
}

export default LifeCycle2