import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

function Node({item,index,deleteNode,checkNode})
 { 
    function handleDelete(){
        deleteNode(index);
    }
    function handleCheck(){
    checkNode(index);
   
    }
    return (
        <div className='node'>
           <div className="cell">
            <h1>{item.title}</h1>
            <p style={{textDecoration:item.iscompleted? 'line-through':''}}>{item.todos}</p>
             <button onClick={handleDelete} className="DeleteButton"><DeleteIcon/></button>  
             <button onClick={handleCheck} className="CheckButton"><Checkbox color="primary"/></button>     
            </div>
            
        </div>
    );
    
}

export default Node;
