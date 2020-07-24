import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';//this is a node module so no need for ./
import './NewTodoForm.css'


class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });   
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.createToDo({...this.state, id: uuidv4(), completed: false});//taking everything in the state and creating another object and adding in a unique id
    this.setState({task: ""});
  }
 
  render(){
    return(
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New To Do</label>
        <input 
        type="text" 
        placeholder="New Task" 
        id="task"
        name="task"
        value={this.state.task} 
        onChange={this.handleChange}
        />
        <button>Add To Do</button>
      </form>
    )
  }
}
export default NewTodoForm;