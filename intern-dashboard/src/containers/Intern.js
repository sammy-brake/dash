
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchInterns} from '../actions/fetchInterns'
import {editIntern} from '../actions/editIntern'
import InternList from '../components/InternList.js';
import InternCard from '../components/InternCard.js';
import InternHours from '../components/InternHours.js'

class Intern extends Component {

    state = {
        hours: null,
        internId: this.props.match.params.internId-1,
        visibility: "visible", 
        interns: this.props.interns
    }

    handleChange = event => {
        this.setState({
            hours: event.target.value,
            internId: this.props.match.params.internId-1,
            visibility: "visible",
            interns: this.props.interns
        });
        }

    handleSubmit = event => {
         event.preventDefault();
         this.props.editIntern(this.state);
         this.setState({
            hours: null,
            internId: this.props.match.params.internId-1,
            visibility: "hidden"
        });  
    };
 
    
        render() {  
        return (
            <div className="display">
                {this.props.interns ?
                <div>
                <InternList interns={this.props.interns}  />
                <InternCard  intern={this.props.interns[this.props.match.params.internId-1]}/>
                <InternHours internId={this.props.match.params.internId} visibility={this.state.visibility} handleSubmit={this.handleSubmit} handleChange={this.handleChange} hours={this.state.hours} intern={this.props.interns[this.props.match.params.internId-1]} />
                </div>
                :
                null}
            </div>
            
        )
        };
};


const mapStateToProps = (state) => {
    return ({
        
        interns: state.interns.interns
    })
}
 
// export default connect(mapStateToProps, {fetchInterns})(Intern)
export default connect(mapStateToProps, {fetchInterns, editIntern})(Intern)

