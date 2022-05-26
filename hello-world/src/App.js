import { Component } from 'react';
import LifeCycle1 from './LifeCycle1';
// import './App.css';
// // import logo from './logo.svg';
// import {Greet} from './component/greet';
// import Welcome from './component/welcome';
// import Message from './component/Message';
// import Counter from './component/Counter';
// import Hello from './component/Hello';
// import FunctionClick from './component/functionClick';
// import ClassClick from './component/classClick';
// import EventBind from './EventBind';
// import ParentComponent from './ParentComponent';
// import UserGreeting from './UserGreeting';
// import Namelist from './Namelist';
// import PersonList from './PersonList';
// import StyleSheet from './StyleSheet';
// import Inline from './Inline';
// import './appStyles.css'
// import styles from './appStyle.module.css'
// import Form from './Form';
class App extends Component{
  render(){
    return(
      <div className='App'>
       {/* <Form /> 
        <h1 className='error'>Error </h1>
        <h1 className={styles.success}>Success</h1>
          <Inline />
        <StyleSheet primary={true} />
        <PersonList />
        <Namelist />
        <UserGreeting />

        <ParentComponent />
        <EventBind />
        <FunctionClick />
        <ClassClick />
        <Counter />

        <Message />
        <Greet name='shazad' place='jamshedpur' />
          <p>This is a children props</p>
        </Greet>
         <Greet name='Lavanya'place='hyderabad'>
           <button>Click on it </button> 
         </Greet> 
         <Greet name='Faisal'place='uttarpradesh'/> 
         <Welcome name='shazad' place='jamshedpur'/>
         <Welcome name='Lavanya'place='hyderabad'/> 
         <Welcome name='Faisal'place='uttarpradesh'/> 
         <Hello />  */}

      <LifeCycle1 />
      </div>
    )
  }
}
export default App;
