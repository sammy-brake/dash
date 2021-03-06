
import React from 'react';

const InternList = (props) => {
    return (
        <div className="intern-list" classID="scrollbar-custom">
            <h1>Interns</h1>
                {props.interns ? props.interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                      <ul>
                   <a href={`http://localhost:3000/interns/${intern.id}`}><button><h5 className="intern-text">{intern.name} - {intern.job}</h5></button></a>  
                   </ul>
                   
                 </div>
                 
                 ) : null};
               
        </div>
    );
};


export default InternList 