import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setlistTodo] = useState([]);
  let addList=(inputText)=>{
    if(inputText!=''){
    setlistTodo([...listTodo,inputText]);
    }
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setlistTodo([...newListTodo]);
  }
  
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1>TODO List</h1>
        <hr />
        {listTodo.map((listitem,i)=>{
          return(
            <TodoList key={i} index={i}item={listitem} deleteItem={deleteListItem}/>
          )
        })}
       
      </div>
    </div>
  )
}

export default App