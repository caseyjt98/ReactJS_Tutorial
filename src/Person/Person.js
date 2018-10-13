import React from 'react' 

// creating a new component
// recall - a component in its simplest form is just a function that returns JSX

const person = () => {
    return (
        <p> hello i am a person and I am {Math.floor(Math.random()*30)} years old! </p>   // JSX  allows us to use dynamic content by running JS in {}
    );
}

export default person; // lets us use our component in other files of our project