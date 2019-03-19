//ACTIONS                    //Method    //Routes        //Reponse
// list all records          --> GET     --> /route      --> Array of records
// get one particular record --> GET     --> /route:id   --> single record
// create record             --> POST    --> /route      --> single record
// update record             --> PUT     --> /route/:id  --> single record
// delete a record           --> DELETE  --> /route/:id   --> nothing

export const Types = {
  signIn: "SIGN_IN",
  signOut: "SIGN_OUT",
  createStream: "CREATE_STREAM",
  fetchStreams: "FETCH_STREAMS",
  fetchStream: "FETCH_STREAM",
  deleteStream: "DELETE_STREAM",
  editStream: "EDIT_STREAM"
};
