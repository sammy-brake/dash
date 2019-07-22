import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {fetchInterns} from './actions/fetchInterns'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Interns from './containers/Interns.js';
import Intern from './containers/Intern.js';
import Hours from './containers/Hours.js';
import Header from '/home/sammybrake/dash/intern-dashboard/src/components/Header.js';

//maybe I want to make the fetch in interns.js and pass that to a component called intern list. 

class App extends Component {

    // componentDidMount() {
    //     this.props.fetchInterns();
    // }

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
       
    </div>
    )
}


}

// const mapStateToProps = (state) => {
    
//     return ({
        
//         interns: state.interns.interns
        
//     })
// }


// export default connect(mapStateToProps, {fetchInterns})(App) 
export default App

