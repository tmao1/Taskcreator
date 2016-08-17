/* eslint-disable react/no-string-refs, max-len, arrow-body-style */
import React from 'react';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>New Task</h1>
        <div>Name: <input type="text" ref="name" /></div>
        <div>Category: <input type="text" ref="category" /></div>
        <div>Due Date: <input type="text" ref="due" /></div>
        <div><button onClick={this.props.submit} >Submit</button></div>
      </div>
    );
  }
}

export default CreateTask;
