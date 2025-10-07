import React, { useState } from 'react'

const ExState = () => {
  const[step,setStep]=useState(0)
  const[count,setCount]=useState(0)
  return (
    <div>
    <input type="text" name="" id="" onChange={(e)=>setStep(parseInt(e.target.value)) || 0} />
     <button onClick={()=>setCount(count+parseInt(step))}>Increment</button>
     <button onClick={()=>setCount(count-step)}>Decrement</button>
     <button onClick={()=>setCount(count=0)}>Reset</button>
     <h3>your Value is : {count}</h3>
    </div>
  )
}

export default ExState
