import React, {Component} from 'react';
import './App.css';

class Task extends Component{
  constructor(props){
    super(props);
    this.state={
      completed: false
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    if (this.state.completed){
      this.setState({completed:false});
      this.props.onDecrease();
    }
    else{
      this.setState({completed:true});
      this.props.onIncrease();
    }
  }

  render(){
    var profileStyle={
      backgroundColor: '#ffffff',
      fontSize: '2em',
      fontWeight: '500',
      maxWidth: '200px',
      margin: '20px',
      borderRadius: '10px',
      padding: '15px'
    }

    var deadlineStyle={
      fontWeight:'400',
      marginLeft: '10px',
      marginTop: '15px',
      fontSize: '.45em',
      color: 'darkgrey'
    }

    var completedStyle={
      fontSize:"0.5em",
      backgroundColor: 'dodgerblue',
      padding: '10px',
      borderRadius: '100px',
      color: 'white',
      marginTop: '45px',
      cursor:'pointer',
      border: 'solid 2px dodgerblue'
    }

    var notCompletedStyle={
      fontSize:"0.5em",
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '100px',
      color: 'tomato',
      marginTop: '45px',
      border: 'solid 2px tomato',
      cursor:'pointer'
    }

    return(
        <div style={profileStyle}>
            <div>{this.props.name}</div>
            <div style = {deadlineStyle} >By {this.props.deadline}</div>
            <div onClick = {this.handleClick} style = {this.state.completed ? completedStyle : notCompletedStyle} > {this.state.completed ? 'Completed' : 'Not Completed'}</div>
        </div>
      );
  }
}

export default Task;
