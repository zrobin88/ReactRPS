import React, {Component} from 'react';
import Game from './Game'
import './style.css';
import Header from './Header'
class App extends Component{

 


  render(){
    return(
      <div>
       <Header />
        <Game />
       
           
      </div>

    )
  }
}

export default App;
