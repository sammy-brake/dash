
import React, { Component } from 'react';
import { connect } from 'react-redux';
class HoursForm extends Component {

    state = {
        hours: null,
        internId: null
    }

    handleChange = event => {
        this.setState({
            hours: event.target.value,
            internId: event.target.id
        });
        }

        handleSubmit = event => {
            event.preventDefault();
            this.props.updateHours(this.state);
            debugger 
            this.setState({
                hours: null,
                internId: null
              });
             
    };

    render() {
       
    return (
        <div className="hours">
            <h1>Update Hours</h1>
                {this.props.interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                      <ul>
                   <form onSubmit={ event => this.handleSubmit(event) }>
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


 //write this action in my actions folder and import

  const mapDispatchToProps = dispatch => {
    return {
        updateHours: internsFormData => dispatch({ type: 'UPDATE_HOURS', payload: internsFormData })
    };
};

const mapStateToProps = state => {
    return {
        internsFormData: state.internsFormData

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoursForm);