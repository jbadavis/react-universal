export const SET_TITLE = 'SET_TITLE';
export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';

export const setHomeTitle = (title) => {
  return { type: SET_TITLE, title };
};

export const addToDoItem = (item) => {
  return { type: ADD_TO_DO_ITEM, item };
};
