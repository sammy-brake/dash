
    import React, { Component } from 'react';
   
    const InternHours = (props) => (
    
    <div >
        <form className="intern-hours" style={{visibility: props.visibility}}  onSubmit={ event => props.handleSubmit(event) }>
        <label>Update Hours: </label>
            <input type="number" value={props.hours} onChange={props.handleChange}/>
            <input type="submit" style={{visibility: props.visibility}}/>
        </form>
        
    </div>
    )

export default InternHours

