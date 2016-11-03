import React, { Component } from 'react';
import './App.css';
const R = React;

class App extends Component {
  render() {
    return 
    	React.createElement('div', {}, 
    		R.createElement('h1', null, 'Request Form')  
    );
  }
}

export default App;