import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ListCreate from './ListCreate';
import Node from "./Node"
let flag=false;
function App() {
  const [node,setNode]=useState([]);
  function addNode(e){
   setNode(prevValue=>{return[...prevValue,e]})

  }
  function deleteNode(i){
   const newTodo=[...node]
   const items=newTodo.filter((item,index)=>{
     return index!==i;
   })
   console.log(items);
   setNode(items);
  
  }
  function checkNode(index){
   
    const newTodo=[...node];
    newTodo[index].iscompleted=!flag;
    flag=!flag;
    setNode(newTodo);
    
  }
  
  return (
    <div className="App">
      <Header/>
      <ListCreate addNode={addNode} />
      <section className="node-section">
  

      {node.map((item,index)=>{
        return <Node item={item} key={index} index={index} deleteNode={deleteNode} checkNode={checkNode}/>
      })}

      
     
      </section>
     
      
    </div>
  );
}

export default App;
