import React, { Component } from 'react';
import './App.css';
import Interns from './Interns.js';
import Intern from './Intern.js';
import Header from '/home/sammybrake/dash/intern-dashboard/src/components/Header.js';

let interns = [
    {
        id: 1,
        name: "Sammy Brake",
        age: 27,
        location_gps: null,
        location_address: "414 E 12th St, Kansas City, MO 64106",
        supervisor: "Kari Dowdell",
        hours_worked: 100,
        hours_allowed: 160,
        job: "Office of Innovation",
        created_at: "2019-07-18T14:27:31.840Z",
        updated_at: "2019-07-18T14:27:31.840Z"
        },
        {
        id: 2,
        name: "Anurag Patel",
        age: 40,
        location_gps: null,
        location_address: "414 E 12th St, Kansas City, MO 64106",
        supervisor: "Fatima Dowdell",
        hours_worked: 60,
        hours_allowed: 160,
        job: "Human Resources",
        created_at: "2019-07-18T14:27:31.999Z",
        updated_at: "2019-07-18T14:27:31.999Z"
        }
    ]

class App extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             interns: []
//         }
//     }
// componentDidMount() {

// }




render() {
    return (
    <div className="App">
        <div className="header">
            <Header />
        </div>
        <div className="intern-list">
            <Interns interns={interns}/>
        </div>
        <div className="intern-content">
            <Intern />
        </div>
       
    </div>
    )
}


}

export default App; 
