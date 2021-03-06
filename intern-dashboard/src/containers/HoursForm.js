
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editIntern} from '../actions/editIntern'


class HoursForm extends Component {

    state = {
        hours: null,
        internId: null,
    }

    handleChange = event => {
        this.setState({
            hours: event.target.value,
            internId: event.target.id,

        });
        }

        handleSubmit = event => {
           event.preventDefault();
            this.props.editIntern(this.state);
            this.setState({
                hours: null,
                internId: null,
        });  
    };

    render() {
      
    return (
        <div className="hours">
            <h1>Update Hours</h1>
                {this.props.interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                    <ul>
                   <form  onSubmit={ event => this.handleSubmit(event) }>
                     <label htmlFor="name">{intern.name}: {intern.hours_worked}/{intern.hours_allowed}  </label>
                      <input type="number" name="hours" id={intern.id}  onChange={this.handleChange}/> 
                      <input type="hidden" value={intern.id} name="internId" ></input>
                      <input type="submit" />
                    </form> 
                    </ul>
                 </div>
                 )};
         </div>
    );
 };
 };

 

HoursForm.defaultProps = {
    interns: []
}

const mapStateToProps = state => {
 
    return {
        interns: state.interns.interns,
    }
}

export default connect(mapStateToProps, {editIntern})(HoursForm);