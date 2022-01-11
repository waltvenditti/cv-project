import React, { Component } from "react";

class General extends Component {
  render() {
    let classes = "General DisplayBox";
    let state = this.props.stateInfo;
    if (state.editMode === true) {
      return (
        <div className={classes}>
          <div className="NameAndNo">
            <span>Name: </span>
            <input
              value={state.general.name}
              name="general-name"
              onChange={this.props.onChange}
            ></input>
            <span id="phoneNo">Phone #: </span>
            <input
              value={state.general.phoneNo} 
              name="general-phoneNo"
              onChange={this.props.onChange}
            ></input>
          </div>
          <span>Address:</span>
          <input
            value={state.general.address}
            name="general-address"
            onChange={this.props.onChange}
          ></input>
          <br />
          <span>Email:</span>
          <input
            value={state.general.email}
            name="general-email"
            onChange={this.props.onChange}
          ></input>
        </div>
      );
    } else {
      return (
        <div className={classes}>
          <div className="NameAndNo">
            <span>Name: {state.general.name}</span>
            <span id="phoneNo">Phone #: {state.general.phoneNo}</span>
          </div>
          <p>Address: {state.general.address}</p>
          <p>Email: {state.general.email}</p>
        </div>
      );
    }
  }
}

export default General;
