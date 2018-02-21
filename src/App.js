import React, { Component } from 'react';
import CustomTable from './components/CustomTable/CustomTable';
import logo from './logo.svg';

import './App.css';
import CustomFrom from './components/CustomForm/CustomForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CustomTable />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomFrom />
      </div>
    );
  }
}

export default App;
