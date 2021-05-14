import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import tasks from './sample/tasksJson.json';

import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import Posts from './components/Posts';

class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks});
  }

  render(){
    return <div>
        <Router>
          <Link className='links' to="/">Home</Link>
          <br/>
          <br/>
          <Link className='links' to="/posts">Posts</Link>
          <br/>
 
          <Route exact path="/" render={() => {
            return <div>
              <TaskForm  addTask={this.addTask}/>
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
            </div>
          }}>
          </Route>

          <Route path='/posts' component={Posts}/>
        </Router>
      </div>
  }
}

export default App;
