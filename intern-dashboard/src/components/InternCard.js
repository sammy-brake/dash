
import React from 'react';

const InternCard = (props) => {     
    return (
        <div className="intern-card" >
        <h1>Intern Stats</h1>
                <h2>Name: {props.intern ? props.intern.name : null}</h2>
                <h3>Workplace: {props.intern ? props.intern.job : null}</h3>
                <h3>Onsite Supervisor: {props.intern ? props.intern.supervisor : null}</h3>
                <p>Age: {props.intern ? props.intern.age : null}</p>
                <p>Hours: {props.intern ? props.intern.hours_worked : null}/{props.intern ? props.intern.hours_allowed : null}</p>
                <a href="/hours">Update Intern Hours</a>
                
        </div>
    )
}

export default InternCard