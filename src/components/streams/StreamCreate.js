import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import StreamForm from "./StreamForm";
//import connect/actions --> hookup actions with connect during export --> use actions in component

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    //reduxForm takes care of prevent default
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
