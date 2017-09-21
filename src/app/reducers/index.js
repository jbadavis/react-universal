import * as actions from '../actions';

const initialState = {
  title: 'Hello',
  toDoItems: [],
  completedItems: []
};

const removeItem = (array, index) => {
  const newArray = [...array];

  newArray.splice(index, 1);

  return newArray;
};

const universalApp = (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_TITLE:
    return Object.assign({}, state, {
      title: action.title
    });
  case actions.ADD_TO_DO_ITEM:
    return Object.assign({}, state, {
      toDoItems: [...state.toDoItems, {
        text: action.item,
        completed: false
      }]
    });
  case actions.COMPLETE_ITEM:
    return Object.assign({}, state, {
      toDoItems: state.toDoItems.map((item, index) => {
        if (Number(action.index) === index) {
          return Object.assign({}, item, {
            completed: !item.completed
          });
        }
        return item;
      })
    });
  case actions.DELETE_ITEM:
    return Object.assign({}, state, {
      toDoItems: removeItem(state.toDoItems, action.index)
    });
  default:
    return state;
  };
  return state;
};

export default universalApp;
