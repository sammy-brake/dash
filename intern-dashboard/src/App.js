import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Interns from './containers/Interns.js';
import Intern from '/home/sammybrake/dash/intern-dashboard/src/components/Intern.js';
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
    
    return (
    <div className="App">
        <div className="header">
            <Header />
        </div>
        <Router>
        <div className="intern-list">
        
            <Route exact path='/mom' component={Interns}/>
        </div>
        <div className="intern-content">
            <Intern />
        </div>
        </Router>
       
    </div>
    )
}


}

export default App; 
