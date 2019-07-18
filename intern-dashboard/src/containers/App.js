import React, { Component } from 'react';
import './App.css';
import Interns from './Interns.js';
import Intern from './Intern.js';

class App extends Component {
render() {
    return (
    <div className="App">
        <div className="header">
            HireKC
        </div>
        <div className="intern-list">
            <Interns />
        </div>
        <div className="intern-content">
            <Intern />
        </div>
       
    </div>
    )
}


}

export default App; 
