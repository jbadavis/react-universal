import { SET_TITLE, ADD_TO_DO_ITEM } from '../actions';

const initialState = {
  title: 'Hello',
  toDoItems: []
};

const universalApp = (state = initialState, action) => {
  switch (action.type) {
  case SET_TITLE:
    return Object.assign({}, state, {
      title: action.title
    });
  case ADD_TO_DO_ITEM:
    return Object.assign({}, state, {
      toDoItems: [...state.toDoItems, action.item]
    });
  default:
    return state;
  };
  return state;
};

export default universalApp;
