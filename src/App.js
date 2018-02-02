import React, { Component } from 'react';
import axios from 'axios';

async function send(url, body, method = 'get') {
  // return axios.get('http://localhost:3001/some-path');
  try {
    const { data } = await axios[method](`http://localhost:3001/${url}`, body);
    return data;
  } catch(err) {
    console.log("err", err);
    console.dir(err);
    return err.response ? err.response.data : { success: false, msg: err.message };
  }
}

async function onCreateOrUpdate(content, filepath, isCreate) {
  const method = isCreate ? 'post' : 'put';
  const { msg, success } = await send('file', { content, filepath }, method);
  return success ? `${msg} bytes writte to ${filepath}` : `Error: ${msg}`;
}


class App extends Component {
  state={
    filepath: 'aaa.txt',
    content: 'hello',
    folder: '',
    responses: []
  };

  updateResponses = (resp) => {
    this.setState({
      responses: this.state.responses.concat(resp)
    });
  };

  async onCreateOrUpdate(content, filepath, isCreate) {
    const resp = await onCreateOrUpdate(content, filepath, isCreate);
    this.updateResponses(resp);
  }

  async onCreate(content = this.state.content, filepath = this.state.filepath) {
    this.onCreateOrUpdate(content, filepath, true);
  };

  async onUpdate(content = this.state.content, filepath = this.state.filepath) {
    this.onCreateOrUpdate(content, filepath);
  }

  async onListFiles(folderpath = this.state.folder) {
    const { success, msg } = await send(`folder/${folderpath}`);
    this.updateResponses(success ? msg : `Error: ${msg}`);
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.filepath} onChange={(e) => this.setState({ filepath: e.target.value })}/>
        <input value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
        <input value={this.state.folder} onChange={(e) => this.setState({ folder: e.target.value })} />
        <button onClick={() => this.onCreate()}>create</button>
        <button onClick={() => this.onUpdate()}>update</button>
        <button onClick={() => this.onListFiles()}>list files</button>
        <div>
          {this.state.responses.map((resp,i)=><div key={i}>{resp}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
