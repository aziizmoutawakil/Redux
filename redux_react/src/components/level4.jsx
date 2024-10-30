import {useDispatch} from 'react-redux'
import React, {useRef, useState} from 'react'
import {provideValueAction} from '../redux/redusers/getValueReducer'

const  Level4 = () => {
  const RefValue = useRef()
  const [value , setValue] = useState('to be updated ....')
  const Dispatch = useDispatch()

 const clickHandler = (e) =>{
  e.preventDefault()
  setValue(RefValue.current.value)
  Dispatch(provideValueAction({updatedValue : RefValue.current.value}))

}

  return (
    <div style={{backgroundColor: 'blue', padding : '1rem'}}>
        <h2>Level4</h2>
        <p>the value un level 4 is :{value} </p>
    <input ref={RefValue} type="text" placeholder='enter any value' />
    <button onClick={clickHandler} type="submit"> submit</button>
    </div>
  )
}

export default Level4
