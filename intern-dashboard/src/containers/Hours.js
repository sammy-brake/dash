

import React, { Component } from 'react';
import HoursForm from '/home/sammybrake/dash/intern-dashboard/src/components/HoursForm.js';

class Hours extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interns: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/interns')
        .then(response => response.json())
        .then(interns => this.setState({interns}))
    }
    
        render() {
        return (
            <div>
                <HoursForm interns={this.state.interns} />
            </div>
            
        )
};

};


export default Hours