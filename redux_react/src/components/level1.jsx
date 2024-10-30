import { useSelector } from 'react-redux'
import React from 'react'
import Level2 from './level2'
function Level1() {
  
    const value = useSelector((state) => state.getValue.value)    
    return (
    <div style={{backgroundColor: 'gray', padding : '1rem'}}>
        <h2>Level1</h2>
        <p>the value un level 1 is : {value} </p>
        <Level2 />
    </div>
  )
}

export default Level1
