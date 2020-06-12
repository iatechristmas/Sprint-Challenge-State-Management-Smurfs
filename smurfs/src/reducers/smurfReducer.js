import {
  FETCH_DATA,
  UPDATE_DATA,
  SET_ERROR,
  ADD_NEW_SMURF,
  REMOVE_SMURF,
} from "../actions/index";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
      };
    case UPDATE_DATA:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case ADD_NEW_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    case REMOVE_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs.filter((smurf) => smurf.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
