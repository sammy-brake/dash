import React from 'react'

export const hoursForm = (interns) => {
    {interns.map(intern => 
        <div key={intern.id} className="intern-text" >
          <ul>
         <form onSubmit={ event => this.handleSubmit(event) }>
           <label htmlFor="name">{intern.name}: {intern.hours_worked}/{intern.hours_allowed}  </label>
            <input type="number" name="hours" id={intern.id}  onChange={this.handleChange}/> 
            <input type="hidden" value={intern.id} name="internId" ></input>
            <input type="submit" />
          </form> 
          </ul>
          </div>
    )
    }
    
}