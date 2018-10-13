
import React from 'react' 

// creating a new component
// recall - a component in its simplest form is just a function that returns JSX

const person = (props) => { 
    return ( 
        <div>
            <p> hi i am {props.name} and I am {props.age} years old </p>  
            <p> {props.children} </p>
        </div>
       
    )
};

export default person; 

// lets us use our component in other files of our project