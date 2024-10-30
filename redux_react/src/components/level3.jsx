import React from 'react'
import Level4 from './level4'
import { useSelector } from 'react-redux'
function Level3(props) {
  const {xValue} = props
    const value = useSelector((state) => state.getValue.value)
  return (
    <div style={{backgroundColor: 'tomato', padding : "1rem"}}>
        <h2>Level3</h2>
        <p>the value un level 3 is :{value} </p>
        <p>the value un level 1 is :{xValue} </p>
        <Level4/>
    </div>
  )
}

export default Level3
