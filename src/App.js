import React from 'react';
import logo from './logo.svg';
import './App.css';



class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number:0}
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Counter Activity
          </p>
  
          <div>          
            <button onClick={() => {this.setState(state => ({number:state.number+1}))}}>+</button>
            <button onClick={() => {this.setState(state => ({number:state.number-1}))}}>-</button>
          </div>
  
           <div>{this.state.number}</div>
  
        </header>
      </div>
    );
  }
  }


export default App;
