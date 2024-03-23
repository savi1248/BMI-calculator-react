
import React, { useState } from 'react'


import Count from './component/count';
import Bmi from './component/BMI calculator/Bmi';
const CounterApp = () => {
  const [count, setCount] = useState(1);
  const increment =()=>{
      setCount(count +1)
      console.log(count+1);
      
  } 
  const decrement =()=>{
    setCount(count - 1)
}
 return (
    <div>
      {/* <Count count={count} increment={increment}  decrement={decrement}/>
       */}
      <Bmi />
    </div>
  );
};

export default CounterApp;