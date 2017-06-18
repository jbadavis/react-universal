import React from 'react';

import styles from './helloWorld.scss';
import url from '../../../images/toaster.svg';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello'
    };
  };

  handleClick() {
    this.setState({
      text: this.state.text === 'Hello' ? 'Goodbye' : 'Hello'
    });
  }

  render() {
    return (
      <div className={styles.helloWorld}>
        <h1>{this.state.text}, World!</h1>
        <button onClick={() => this.handleClick()}>Click me</button>
        <div>
          <img src={url} />
        </div>
      </div>
    );
  }
};

export default HelloWorld;
