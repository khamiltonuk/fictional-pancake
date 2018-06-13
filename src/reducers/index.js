import { RESET_GAME } from "../constants";

const initialState = {
  result: { win: 0, lose: 7, draw: 0 }
};

export default function(state = initialState, { type }) {
  switch (type) {
    case RESET_GAME:
      return { ...state, result: { win: 0, lose: 0, draw: 0 } };
    default:
      return state;
  }
}
