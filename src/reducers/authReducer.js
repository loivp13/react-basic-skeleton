import { Types } from "../actions/Types";
// use object for easy data manipulation
const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Types.signIn:
      return { ...state, isSignedIn: true, userId: action.payload };
    case Types.signOut:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
