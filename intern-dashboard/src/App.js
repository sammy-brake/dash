import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Interns from './containers/Interns.js';
import Intern from './containers/Intern.js';
import Hours from './containers/Hours.js';
import Header from '/home/sammybrake/dash/intern-dashboard/src/components/Header.js';
import Footer from '/home/sammybrake/dash/intern-dashboard/src/components/Footer.js';
import { connect } from 'react-redux';
import {fetchInterns} from './actions/fetchInterns'



class App extends Component {
render() {
     
    
    return (
    <div className="App">
        <div className="header">
            <Header />
        </div>
        <Router>
            <Route exact path='/' component={Interns }/>
            <Route path = '/interns/:internId' component={Intern}/>
            <Route path='/hours' component={Hours}/>
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
// export default App

