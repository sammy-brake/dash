
import React, { Component } from 'react';
import { connect } from 'react-redux';


class HoursForm extends Component {

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        debugger
    return (
        <div className="hours">
            <h1>Update Hours</h1>
                {this.props.interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                      <ul>
                   <form> 
                     <label>{intern.name}: {intern.hours_worked}/{intern.hours_allowed}  </label>
                      <input type="number" onChange={this.handleChange}/> 
                      <input type="hidden" value={intern.id} ></input>
                      <input type="submit" />
                    </form> 
                    </ul>
                 </div>
                 )};
         </div>
    );
 };
 };


 //write this action in my actions folder and import

  const mapDispatchToProps = dispatch => {
    return {
        updateHours: formData => dispatch({ type: 'UPDATE_HOURS', payload: formData })
    };
};

export default connect(null, mapDispatchToProps)(HoursForm);