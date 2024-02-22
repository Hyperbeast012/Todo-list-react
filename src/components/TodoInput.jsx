import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setinputText] = useState('');
    const handleEnterPress=(e)=>{
        if(e.keycode===13){
            props.addList(inputText);
            setinputText("")
        }
    }
  return (
    <div className="input-container">
        <input type="text" placeholder='Enter Your Todo' value={inputText} className='input-box-todo' onKeyDown={handleEnterPress} onChange={e=>{
            setinputText(e.target.value)
        }} />
        <button className='add-btn' onClick={()=>{
            props.addList(inputText);
            setinputText("")
        }}>+</button>
      
    </div>
  )
}

export default TodoInput