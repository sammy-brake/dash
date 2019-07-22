
import React, {Component} from 'react';

const InternCard = (props) => {
    // class InternCard extends Component {

    //   render() {
        
         const intern = props.interns.filter(intern => intern.id === props.id );
          console.log(intern[0])
          
        //   console.log(intern[0].name)
        debugger
    return (
        <div >
                {/* <h1>{intern[0].name}</h1> */}
                <h1>Intern Name</h1>
                <h3>Intern Stats</h3>
                <h5>Hours Update Form</h5>
        </div>
    )
}
// }



export default InternCard