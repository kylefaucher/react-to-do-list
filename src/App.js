import React, {Component} from 'react';
import Task from './task.js';
import CreateTask from './createTask.js';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      numCompleted: 0,
      numTasks: 0,
      tasklist: []
    };

     this.increaseNumCompleted = this.increaseNumCompleted.bind(this);
     this.decreaseNumCompleted = this.decreaseNumCompleted.bind(this);
     this.addTask = this.addTask.bind(this);
  }

  increaseNumCompleted(){
    this.setState({numCompleted: this.state.numCompleted + 1})
  }
  decreaseNumCompleted(){
    this.setState({numCompleted: this.state.numCompleted - 1})
  }

  addTask(e, taskName, taskDeadline){
    let updatedList = this.state.tasklist;
    updatedList.push({name: taskName, deadline: taskDeadline});
    this.setState({tasklist: updatedList, numTasks: this.state.numTasks + 1});
  }

  render(){
    var generalStyle={
      textAlign: 'center',
      fontSize: '1.75em',
      fontWeight: '100'
    }

    var appStyle={
      backgroundColor: '#f2f2f2',
      margin: 'auto',
      marginTop: '20px',
      maxWidth: '900px',
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '.5em',
      fontWeight: '100',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      padding: '20px'
    }

    return(
      <div style={generalStyle}>
        <h1>To Do List</h1>
        <div> {this.state.numCompleted} completed tasks </div>
        <div> {this.state.numTasks - this.state.numCompleted} to do </div>
        <CreateTask onAdd = {this.addTask} />
        <div style={appStyle}>
            {this.state.tasklist.map(item => <Task key={item.name} name={item.name} deadline={item.deadline} onIncrease = {this.increaseNumCompleted} onDecrease = {this.decreaseNumCompleted} />)}
        </div>
      </div>
      );
  }
}

export default App;
