import React, { Component } from 'react';
import Todo from './Todo'; 

class Todolist  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
               Task:"",
               Todotab:[]
        };
    }
    handlechange = (e) => {
        this.setState({
            Task:e.Target.value
        });
    }

    Addtask = () => { (this.state.Task !==" ")
         ? this.setState({
            Todotab:[...this.state.Todotab,{id:Date.now(),Task:this.state.Task,isDone:false}
            ],
            Task:""
                })   :(alert("Please enter a valid Task"))
    }
    taskDone =(id) =>{
        this.setState({
            Todotab:this.state.Todotab.map(
                item => item.id === id ? { ...item , isDone : !item.isDone} : item  )

        })
    }
    deleteTask =(id)=>{
        this.setState({
            Todotab:this.state.Todotab.filter((item)=>item.id!==id)
        })
    }
    render() { 
        return (
             <div className="App">
                 <div className='todo_list'>
               <h1>Liste my profile</h1>
               <input type='Text'
                placeholder='tapez votre texte'
                onChange={this.state.Task} />
               <button onClick={this.Addtask}>Add</button>
             </div>
             <div className='list'>
                 {
                     this.state.Todotab.map((item)=>(
                         <Todo taskDone={this.taskDone} 
                         deleteTask={this.deleteTask} 
                         item={item} 
                         key={item.id} />
                     ))
                 }
             </div>
             </div> );
    }
}
 
export default Todolist;