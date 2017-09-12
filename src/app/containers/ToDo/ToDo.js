import React from 'react';
import { connect } from 'react-redux';
import { addToDoItem } from '../../actions';
import styles from './toDo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    const input = e.target.querySelector('#toDoInput');
    const val = input.value;

    this.props.addToDoItem(val);

    input.value = '';

    e.preventDefault();
  }

  render() {
    const items = this.props.items.map((item, i) => {
      return <p className={styles.item} key={i}>{i+1} - {item}</p>;
    });

    return (
      <div className={styles.toDo}>
        <h2>To Do</h2>
        <div className={styles.items}>
          { items }
        </div>
        <h3>Add To Do</h3>
        <form onSubmit={this.handleSubmit}>
          <input id="toDoInput" type="text" name="firstname" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDoItem: (item) => {
      dispatch(addToDoItem(item));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.toDoItems
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
