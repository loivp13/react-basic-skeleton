import { Types } from "./Types";
import streams from "../apis/stream";
import history from "../history";
//actions --> dispatch async function--> await Promise--> dispatch response --> reducers dump payload -->  store

export const signIn = userId => {
  return {
    type: Types.signIn,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: Types.signOut
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: Types.createStream, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: Types.fetchStreams, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: Types.fetchStream, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: Types.editStream, payload: response.data });

  history.push("/");
};
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: Types.deleteStream, payload: id });
  history.push("/");
};
