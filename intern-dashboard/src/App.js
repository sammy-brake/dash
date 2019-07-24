import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Interns from './containers/Interns.js';
import Intern from './containers/Intern.js';
import Hours from './containers/Hours.js';
import Header from './components/Header.js';
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
            <Route exact path='/' component={Interns }/>
            <Route path = '/interns/:internId' component={Intern}/>
            <Route path='/hours' component={Hours} interns={this.props.interns}/>
        </Router>
        <div className="footer">
            <Footer />
        </div>
       
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

