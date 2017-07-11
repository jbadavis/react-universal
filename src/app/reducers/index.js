import { SET_TITLE } from '../actions';

const initialState = {
  title: 'Hello',
};

const universalApp = (state = initialState, action) => {
  switch (action.type) {
  case SET_TITLE:
    return Object.assign({}, state, {
      title: action.title
    });
  default:
    return state;
  };
  return state;
};

export default universalApp;
