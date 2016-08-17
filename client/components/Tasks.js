/* eslint-disable jsx-quotes, no-underscore-dangle */
import React from 'react';
import axios from 'axios';

class Tasks extends React.Component {
// export default () => {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentDidMount() {
    console.log('in did mount');
    axios.get('//localhost:9001/api/tasks')
    .then((rsp) => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(rsp);
      this.setState({ tasks: rsp.data.content });
    });
  }

  render() {
    return (
      <div>
        <h1>GET STARTED!!</h1>
        <div>
            {this.state.tasks.map((t, i) => <div key={i} value={t.id} >{ t.name } {' '} { t.category} {' '} { t.due } {' '} { t.complete + '' }</div>)}
        </div>
      </div>
    );
  }
}

export default Tasks;
