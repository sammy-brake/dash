
import React from 'react';

const InternCard = (props) => {     
      
    return (
        <div className="intern-card" >
                <h1>{props.intern ? props.intern.name : null}</h1>
                <h1>Intern Name</h1>
                <h3>Intern Stats</h3>
                <h5>Hours Update Form</h5>
                <a href="/interns/${:id}/edit">Update Intern Hours</a>

        </div>
    )
}



export default InternCard