
import React from 'react'

import Button from './button'

const Count = (props) => {
  return (
   <div>
    
    <Button count={props.count} increment={props.increment}  decrement={props.decrement}/>
    </div>
  )
}

export default Count