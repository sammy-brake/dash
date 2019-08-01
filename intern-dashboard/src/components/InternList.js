
import React from 'react';
import {Link} from 'react-router-dom'

const InternList = (props) => {
    return (
        <div className="intern-list" classID="scrollbar-custom">
            <h1>Interns</h1>
                {props.interns ? props.interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                      <ul>
                          <Link to={`/interns/${intern.id}`}><button><h5 className="intern-text">{intern.name} - {intern.job}</h5></button></Link>
                   </ul>
                 </div>
                 ) : null};
               
        </div>
    );
};


export default InternList 