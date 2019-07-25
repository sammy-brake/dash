
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchInterns} from '../actions/fetchInterns'
import InternList from '../components/InternList.js';
import InternCard from '../components/InternCard.js';

class Intern extends Component {

    componentDidMount() {
        this.props.fetchInterns();
    }
 
    
        render() { 
        return (
            <div>
                {this.props.interns ?
                <div>
                <InternList interns={this.props.interns}  />
                <InternCard handleSubmit={this.handleSubmit} intern={this.props.interns[this.props.match.params.internId-1]}/>
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

export default connect(mapStateToProps, {fetchInterns})(Intern) 
