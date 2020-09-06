import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Fab} from '@material-ui/core'

function ListCreate({addNode}) {
    const [todo,addTodo]=useState({
        title:'',
        todos:''
    });
   function handleChange(e){
       const {name,value}=e.target;
        addTodo(prevValue=>({...prevValue,[name]:value}))
       }
       function handleTodo(e){
        e.preventDefault();
        addNode(todo);
        addTodo({title:'',todos:''});
       }
      
    return (
    <section className="listcreate-section">
        <div className="listcreate">
           <form className="createnode">
           <input className="input-title" name="title" type="text" placeholder="Enter Title" value={todo.title} onChange={handleChange}/>
            <textarea className="textarea" name="todos" rows="3"  onChange={handleChange} value={todo.todos} placeholder="Enter To Do"/>
            <Fab className="list-button" onClick={handleTodo} ><AddIcon /></Fab>
           </form>
          
        </div>
    </section>
    )
}

export default ListCreate;
