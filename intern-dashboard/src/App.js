import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Interns from './containers/Interns.js';
import Intern from './containers/Intern.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import { connect } from 'react-redux';
import {fetchInterns} from './actions/fetchInterns'

class App extends Component {

    componentDidMount() {
        this.props.fetchInterns();
    }
    
render() {
    return (
    <div className="App">
        <div className="header">
            <Header />
        </div>
        <Router>
            <Route path='/' component={Footer}/>
            <Route exact path='/' component={Interns }/>
            <Route exact path = '/interns/:internId' component={Intern} interns={this.props.interns}/>
            <Route path='/about' component={About}/>
        </Router>
    </div>
    )
}
} 

const mapStateToProps = (state) => {
    return ({
        interns: state.interns.interns
    })
}

export default connect(mapStateToProps, {fetchInterns})(App) 

