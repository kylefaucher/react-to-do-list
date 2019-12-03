import React, {Component} from 'react';
import './App.css';

class CreateTask extends Component{
  constructor(props){
    super(props);
    this.state = {
      newtaskname: '',
      newtaskdeadline: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDeadlineChange = this.onDeadlineChange.bind(this);
  }

  onNameChange(e){
    this.setState({newtaskname: e.target.value});
  }

  onDeadlineChange(e){
    this.setState({newtaskdeadline: e.target.value});
  }


  render(){
      var style = {
          margin: "50px"
      }


    return(
        <div style = {style}>
            <input onChange = {this.onNameChange} type = "text" value = {this.state.newtaskname} />
            <label> Finish by
            <input onChange = {this.onDeadlineChange} type = "date" value = {this.state.newtaskdeadline} /> </label>
            <button onClick={(event) => this.props.onAdd(event, this.state.newtaskname, this.state.newtaskdeadline)} type = "button"> Create </button>
        </div>
      );
  }
}

export default CreateTask;
