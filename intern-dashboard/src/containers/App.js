import React, { Component } from 'react';
import './App.css';
import Interns from './Interns.js';
import Intern from './Intern.js';
import Header from '/home/sammybrake/dash/intern-dashboard/src/components/Header.js';

//maybe I want to make the fetch in interns.js and pass that to a component called intern list. 

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interns: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/interns')
        .then(response => response.json())
        .then(interns => this.setState({interns}))
       
        
    }

// intern-list does is not stateful, might not be a container
render() {
    console.log(this.state)
    return (
    <div className="App">
        <div className="header">
            <Header />
        </div>
        
        <div className="intern-list">
            <Interns interns={this.state.interns}/>
        </div>
        <div className="intern-content">
            <Intern />
        </div>
       
    </div>
    )
}


}

export default App; 
