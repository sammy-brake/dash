
import React, {Component} from 'react';

// const InternCard = (props) => {
    class InternCard extends Component {

    
    // const result = words.filter(word => word.length > 6);
//  intern = props.interns.filter(intern => intern.id == );

      
      render() {
        
          const intern = this.props.interns.filter(intern => intern.id == this.props.id );
        
        debugger
    return (
        
       
        <div >
             
                <h1>{intern[0]["name"]}</h1>
                <h1>Intern Name</h1>
                <h3>Intern Stats</h3>
                <h5>Hours Update Form</h5>
        </div>
    )
}
}



export default InternCard