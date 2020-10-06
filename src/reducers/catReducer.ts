import { CAT } from '../actions/getCat';

const INITIAL_STATE = { cats: [] };

export const catReducer = (state = INITIAL_STATE, action: any) => {
  const { type, value } = action;

  switch (type) {
    case CAT:
      const newCat = value;
      return { ...state, cats: state.cats.concat(newCat) };
    default:
      return state;
  }
};
