
    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import {editIntern} from '../actions/editIntern'
    
    
    class InternHours extends Component {
    
        state = {
            hours: null,
            internId: this.props.internId,
            visibility: "visible"
        }
    
        handleChange = event => {
            this.setState({
                hours: event.target.value,
                internId: this.props.internId
            });
            }
    
            handleSubmit = event => {
               event.preventDefault();
                this.props.editIntern(this.state);
                this.setState({
                    hours: null,
                    internId: this.props.internId,
                    visibility: "hidden"
            });  
        };


   render() {
       debugger
     return (
    <div >
        <form className="intern-hours"  onSubmit={ event => this.props.handleSubmit(event) }>
        <label>Update Hours: </label>
            <input type="number" value={this.props.hours} onChange={this.props.handleChange}/>
            <input type="submit" style={{visibility: this.state.visibility}}/>
        </form>
        
    </div>
    )

     }
}
InternHours.defaultProps = {
    interns: []
}

const mapStateToProps = state => {
    return {
        interns: state.interns.interns,
    }
}

export default connect(mapStateToProps, {editIntern})(InternHours);
