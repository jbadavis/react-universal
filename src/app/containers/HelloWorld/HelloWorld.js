import React from 'react';
import { connect } from 'react-redux';
import { setHomeTitle } from '../../actions';

import styles from './helloWorld.scss';
import url from '../../../images/toaster.svg';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  };

  handleClick = () => {
    this.props.setHomeTitle(this.props.title === 'Hello' ? 'Goodbye' : 'Hello');
  }

  render() {
    return (
      <div className={styles.helloWorld}>
        <h1>{this.props.title}, World!</h1>
        <button onClick={this.handleClick}>Click me</button>
        <div>
          <img src={url} />
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeTitle: (title) => {
      dispatch(setHomeTitle(title));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    title: state.title
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
