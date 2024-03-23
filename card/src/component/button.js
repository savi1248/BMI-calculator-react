import React from 'react'

const Button= (props) => {

  return (
   
    <div>
       <h1>count:{props.count}</h1>
    <button onClick={props.increment} >increment</button>
    <button  onClick={props.decrement}>decrement</button>
  
       
    </div>
  );
}

export default Button