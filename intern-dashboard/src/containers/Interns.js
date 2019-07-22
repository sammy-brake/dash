import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchInterns} from '../actions/fetchInterns'
import InternList from '/home/sammybrake/dash/intern-dashboard/src/components/InternList.js';
import Home from '/home/sammybrake/dash/intern-dashboard/src/components/Home.js';

class Interns extends Component {

    componentDidMount() {
        this.props.fetchInterns();
    }
     
        render() {
      
        return (
            <div>
            
                <InternList interns={this.props.interns} />
                <Home />
            </div>
            
        )
       
};

};

const mapStateToProps = (state) => {
   
    return ({
        
        interns: state.interns.interns
    })
}


export default connect(mapStateToProps, {fetchInterns})(Interns) 