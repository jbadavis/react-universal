import React from 'react';
import { connect } from 'react-redux';
import { addToDoItem, completeItem, deleteItem } from '../../actions';
import styles from './toDo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    const input = e.target.querySelector('#toDoInput');
    const val = input.value;

    if (val.length !== 0) {
      this.props.addToDoItem(val);

      input.value = '';
    }

    e.preventDefault();
  }

  handleComplete(e) {
    this.props.completeItem(e.currentTarget.getAttribute('id'));
  }

  handleDelete(e) {
    this.props.deleteItem(e.currentTarget.getAttribute('id'));
  }

  render() {
    const toDoItems = this.props.toDoItems.map((item, i) => (
      <div className={styles.item} key={i}>
        <span className={styles.copy}>{item.text}</span>

        <span className={item.completed ? styles.undo : styles.done}
          id={i}
          onClick={(e) => this.handleComplete(e)}>
          {item.completed ? 'undo' : 'done'}
        </span>

        <span className={styles.delete} id={i} onClick={(e) => this.handleDelete(e)}>
          delete
        </span>
      </div>
    ));

    return (
      <div className={styles.toDo}>

        {this.props.toDoItems.length > 0 ? <h2>To Do</h2> : null}

        <div className={styles.items}>{toDoItems}</div>

        <h2>Add To Do</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
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
    },
    completeItem: (index) => {
      dispatch(completeItem(index));
    },
    deleteItem: (index) => {
      dispatch(deleteItem(index));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    toDoItems: state.toDoItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
