

import React, { Component } from 'react';
import InternList from '/home/sammybrake/dash/intern-dashboard/src/components/InternList.js';
import InternCard from '/home/sammybrake/dash/intern-dashboard/src/components/InternCard.js';

class Interns extends Component {

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
                <InternList interns={this.state.interns} />
                <InternCard />
            </div>
            
        )
};

};


export default Interns 