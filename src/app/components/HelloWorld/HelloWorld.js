import React from 'react';

import styles from './helloWorld.scss';

class HelloWorld extends React.Component {
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
      <div className={ styles.helloWorld }>
        <h1>{ this.state.text }</h1>
        <button onClick={ () => this.handleClick() }>Click me</button>
      </div>
    );
  }
};

export default HelloWorld;
