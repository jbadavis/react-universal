export const SET_TITLE = 'SET_TITLE';
export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const setHomeTitle = (title) => {
  return { type: SET_TITLE, title };
};

export const addToDoItem = (item) => {
  return { type: ADD_TO_DO_ITEM, item };
};

export const completeItem = (index) => {
  return { type: COMPLETE_ITEM, index };
};

export const deleteItem = (index) => {
  return { type: DELETE_ITEM, index };
};
