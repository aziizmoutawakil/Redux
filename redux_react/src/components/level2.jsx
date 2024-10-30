import React, { useRef, useState } from 'react'
import Level3 from './level3' 
 
const Level2 = (props) => {
  // const InputRef = useRef()
const {xValue} = props 
const value = 'here 2'
  // const [value , setValue] = useState('empty value')
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setValue(InputRef.current.value)
  // }
  return (
    <div style={{backgroundColor: 'green', padding : '1rem'}}>
        <h2 >Level2</h2>
        <p>the value un level 2 is :{value} </p>
        <p>the value from level 1 is :{xValue} </p>
        
        <Level3 xValue={xValue} />
    </div>
  )
}

export default Level2
