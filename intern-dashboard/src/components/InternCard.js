
import React from 'react';

const InternCard = ({interns}) => {
    //window.location.href will give me access to the url
    // window.location.href[window.location.href.length -1] if it's length is 28 will get the id. if it is 
    // 29 then use -2
    
    return (
        <div >
                <h1>Intern Name</h1>
                <h3>Intern Stats</h3>
                <h5>Hours Update Form</h5>
        </div>
    )
}


export default InternCard ;