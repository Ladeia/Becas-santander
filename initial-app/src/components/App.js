import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Paragrafo de teste</p>
        <p>Segundo parágrafo de teste</p>
        <p>{ new Date().toLocaleDateString("pt-BR") }</p>
      </div>
    );
  }
}

export default App;
