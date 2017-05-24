import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello, World!'
    };
  };

  handleClick() {
    this.setState({
      text: 'Goodbye, World!'
    });
  }

  render() {
    return (
      <div>
        <h1>{ this.state.text }</h1>
        <button onClick={ () => this.handleClick() }>Click me</button>
      </div>
    );
  }
};
