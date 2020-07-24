import React, { Component } from 'react'
import Todo from './todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import SimpleStorage from 'react-simple-storage';

 class TodoList extends Component {
   constructor(props){
     super(props);
     this.state = {
       todos: [] 
      };
      this.create = this.create.bind(this);
      this.remove = this.remove.bind(this);
      this.update = this.update.bind(this);
      this.toggleCompletion = this.toggleCompletion.bind(this);
      // this.storeTaskInLocalStorage = this.storeTaskInLocalStorage.bind(this);
      

   }
   create(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
    // this.storeTaskInLocalStorage(newTodo);
   }
  //  storeTaskInLocalStorage(task){
  //    let tasks;
  //    if(localStorage.getItem('tasks') === null){
  //      tasks = [];
  //    }else {
  //      tasks = JSON.parse(localStorage.getItem('tasks'));
  //    }
  //    tasks.push(task);
  //    localStorage.setItem('tasks',JSON.stringify(tasks));
  //  }

   remove(id){
     this.setState({
       todos: this.state.todos.filter(t => t.id !== id)
     })
     //we use filter to create a new array with everything that doesn't equal to the current id
   }
   update(id, updatedTask){
      const updatedTodos = this.state.todos.map(todo => {
        if(todo.id === id) {
          return { ...todo, task: updatedTask };
        }
        return todo;
      });
      this.setState({ todos: updatedTodos });
   }
   toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
   }
   render() {
     const todos = this.state.todos.map(todo => {
       return (
       <Todo 
       key={todo.id} 
       id={todo.id} 
       task={todo.task} 
       completed={todo.completed}
       removeToDo={this.remove}
       updateToDo={this.update} 
       toggleToDo={this.toggleCompletion}
       />
       );
     });
     return (
       <div className='TodoList'>
        <h1>To Do List!
          <span>A React To Do List App.</span>
        </h1>
        <ul>
        <SimpleStorage parent={this} />
        </ul>
        <ul>
          {todos}
        </ul>
        <NewTodoForm createToDo={this.create} />
       </div>
     )
   }
 }
 export default TodoList;