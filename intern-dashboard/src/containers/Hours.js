
import { connect } from 'react-redux';
import {fetchInterns} from '../actions/fetchInterns';
import React, { Component } from 'react';
import HoursForm from './HoursForm';

class Hours extends Component {


    componentDidMount() {
        this.props.fetchInterns();
    }
    
        render() {
        return (
            <div>
                <HoursForm interns={this.props.interns} />
            </div>
            
        )
};

};

const mapStateToProps = (state) => {
   
    return ({
        
        interns: state.interns.interns
    })
}


export default connect(mapStateToProps, {fetchInterns})(Hours) 