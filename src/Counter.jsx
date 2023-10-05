import React, { useState } from 'react'

const Counter = () => {
    const initialState = 0;
    const [count , setCount] = useState(0);

    const decrementCount = ()=>{
        if(count>0){
            setCount(prevValue=>prevValue-1)
        }
    }

  return (
    <div className='style_counter'>
        <h1>Counter : {count}</h1>
        <div className='style_button'>
        <button onClick={()=>setCount(prevValue => prevValue +1)}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={()=>setCount(initialState)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter