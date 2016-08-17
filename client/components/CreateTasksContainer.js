/* eslint-disable no-useless-constructor,react/prefer-stateless-function,react/no-string-refs */
import React from 'react';
import CreateTask from './CreateTask';
import Tasks from './Tasks';
import axios from 'axios';

class CreateTaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.log('why wont this work');
    console.log(this.refs);
    const category = this.refs.create.refs.category.value;
    const name = this.refs.create.refs.name.value;
    const due = this.refs.create.refs.due.value;

    axios.post('//localhost:9001/api/tasks/', { name, category, due })
    .then((rsp) => {
      console.log('result of task post');
      console.log(rsp);
      // this.setState({ pokemon: [...this.state.pokemon, rsp.data.pokemon] });
    });
  }

  render() {
    return (
      <div>
        <div>
          <CreateTask submit={this.submit} ref='create'/>
        </div>
        <div>
          <Tasks />
        </div>
      </div>
    );
  }
}

module.exports = CreateTaskContainer;
