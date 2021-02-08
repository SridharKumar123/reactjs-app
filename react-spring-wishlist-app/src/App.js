import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import FirstComponent from './components/learnings/FirstComponent';
import SecondComponent from './components/learnings/SecondComponent';
import TodoApp from './components/todo/TodoApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter/>*/}      
        <TodoApp/>   
      </div>
    );
  }
}

class LearningApps extends Component {
  render() {
    return (
      <div className="LearningApps">
        <FirstComponent /> 
        <SecondComponent/>
      </div>
    );
  }
}

export default App;
