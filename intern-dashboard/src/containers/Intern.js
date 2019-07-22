
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {fetchIntern} from '../actions/fetchIntern'
import {fetchInterns} from '../actions/fetchInterns'
import InternList from '/home/sammybrake/dash/intern-dashboard/src/components/InternList.js';
import InternCard from '/home/sammybrake/dash/intern-dashboard/src/components/InternCard.js';

class Intern extends Component {

    componentDidMount() {
        this.props.fetchInterns();
        // this.props.fetchIntern(this.props.match.params.internId);
    }


        render() { 
           
        return (
            <div>
                <InternList interns={this.props.interns}  />
                <InternCard interns={this.props.interns} id={this.props.match.params.internId} />
            </div>
            
        )
};

};

const mapStateToProps = (state) => {
    
    return ({
        
        // intern: state.interns.intern,
        interns: state.interns.interns
        
        
    })
}

// export default connect(mapStateToProps,{fetchInterns, fetchIntern})(Intern) 
export default connect(mapStateToProps, {fetchInterns})(Intern) 