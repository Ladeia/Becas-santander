import React, { Component } from 'react';

class App3 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {nome:""};
    this.changeName = this.changeName.bind(this);
  }
  
  changeName = function(event){
    this.setState({nome: event.target.value});
  }

  render() {
    return (
      <div>
        Nome: <input tyle="text" value={this.state.nome} onChange={this.changeName}></input>
        <p>Olá {this.state.nome}</p>
      </div>
    );
  }
}

export default App3;
