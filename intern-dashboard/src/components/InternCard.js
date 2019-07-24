
// import React from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editIntern} from '../actions/editIntern'

// const InternCard = (props) => {    
class InternCard extends Component {
    state = {
        interns: this.props.interns,
        hours: null,
        internId: null
    }

    handleChange = event => {
        this.setState({
            hours: event.target.value,
            internId: event.target.id,
            interns: this.props.interns
        });
        }

        handleSubmit = event => {
            // event.preventDefault();
            this.props.editIntern(this.state);
            this.setState({
                hours: null,
                internId: null,
                interns: this.props.interns
        });  
    };

        render(){
    return (
        <div className="intern-card" >
        <h1>Intern Stats</h1>
                <h2>Name: {this.props.intern ? this.props.intern.name : null}</h2>
                <h3>Workplace: {this.props.intern ? this.props.intern.job : null}</h3>
                <p>Onsite Supervisor: {this.props.intern ? this.props.intern.supervisor : null}</p>
                <p>Age: {this.props.intern ? this.props.intern.age : null}</p>
                <p>Hours: {this.props.intern ? this.props.intern.hours_worked : null}/{this.props.intern ? this.props.intern.hours_allowed : null}</p>
                {this.props.intern ? <form onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="name">Update Hours:</label>
                    <input type="number" name="hours" id={this.props.intern.id} onChange={this.handleChange}/>
                </form>
                : 
                null}
        </div>
    )
}
 }

 const mapStateToProps = state => {
 
    return {
        interns: state.interns.interns,
        internHours: state.internsFormData.hours, 
        internId: state.internsFormData.internId
    }
}

export default connect(mapStateToProps, {editIntern})(InternCard);

