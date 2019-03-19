import { Types } from "../actions/Types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case Types.fetchStream:
      return { ...state, [action.payload.id]: action.payload };

    case Types.fetchStreams:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case Types.editStream:
      return { ...state, [action.payload.id]: action.payload };

    case Types.deleteStream:
      return _.omit(state, action.payload);

    case Types.createStream:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
