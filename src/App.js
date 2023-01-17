import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Screen2 from './Screen2.js'
import MainRouter from './routes/mainRouter'
import MiddelScreens from './ScreenTypes/MiddelScreens';

//class HeaderComp extends React.Component{
//  constructor(props){
//    super(props)
//    this.parameters = {
//      a: 20,
//      b:30,
//      c:40,
//    }
//
//    this.name = "null"
//    }
//  render(){
//    
//
//
//    return <div>
//            <button onClick={() => {this.name = "not null"; console.log("Pressed")}}>press </button> 
//            rendered comp {this.name} 
//      </div>
//
//  }
//
//}



function App() {
  

  

  return (
          <MainRouter />
    

  
  );
}

export default App;
