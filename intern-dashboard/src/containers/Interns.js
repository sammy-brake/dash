import React, { Component } from 'react';
import InternList from '/home/sammybrake/dash/intern-dashboard/src/components/InternList.js';

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
            <div >
                <h1>Interns</h1>
                 <InternList interns={this.state.interns} />
            </div>
        )
};

};


export default Interns 