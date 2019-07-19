import React from 'react';
import InternList from '/home/sammybrake/dash/intern-dashboard/src/components/InternList.js';

const Interns = (props) => {
    
        return (
            <div >
                <h1>Interns</h1>
                 {props.interns.map(intern => 
                    <div key={intern.id} className="intern-text" >
                        <ul>
                      <button><h5 className="intern-text">{intern.name} - {intern.job}</h5></button>  
                        </ul>
                    </div>
                    )}
                     
            </div>
        )
};

export default Interns 