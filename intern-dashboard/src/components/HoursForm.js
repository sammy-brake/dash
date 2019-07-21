
import React from 'react';

const HoursForm = ({interns}) => {
    return (
        <div className="hours">
            <h1>Update Hours</h1>
                {interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                      <ul>
                   <form>
                      <label>{intern.name}: {intern.hours_worked}/{intern.hours_allowed}  </label>
                      <input type="number"/>
                      <input type="hidden" value={intern.id} ></input>
                    </form>
                   </ul>
                 </div>
                 )};
        </div>
    );
};


export default HoursForm;