
import { connect } from 'react-redux';
import {fetchInterns} from '../actions/fetchInterns';
import React, { Component } from 'react';
import HoursForm from './HoursForm';

class Hours extends Component {

        render() {
        return (
            <div>
                <HoursForm  />
            </div>
            
        )
};
};

// const mapStateToProps = (state) => {
//     return ({
//         interns: state.interns.interns
//     })
// }


// export default connect(mapStateToProps, {fetchInterns})(Hours) 
export default Hours

