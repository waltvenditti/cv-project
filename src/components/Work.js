import React, { Component } from "react";

class Work extends Component {
  render() {
    const state = this.props.stateInfo;
    const stateName = `work${this.props.workCount}`;

    if (state[stateName].visible === false) return <div></div>;

    let classes = "Work DisplayBox";

    let buttonString;

    if (state[stateName].expBtn === true) {
      buttonString = "+";
    } else {
      buttonString = "X";
    }

    let buttonClass;
    if (this.props.workCount === "3") {
      buttonClass = "roundButtonHidden";
    } else {
      buttonClass = "roundButton";
    }

    if (state.editMode === true) {
      return (
        <div className={classes}>
          <span>Company: </span>
          <input
            onChange={this.props.onChangeWork}
            value={state[stateName].company}
            name={`${stateName}-company`}
          ></input>
          <br />
          <span>Position: </span>
          <input
            onChange={this.props.onChangeWork}
            value={state[stateName].position}
            name={`${stateName}-position`}
          ></input>
          <br />
          <span>Work Responsibilities: </span>
          <input
            onChange={this.props.onChangeWork}
            value={state[stateName].desc}
            name={`${stateName}-desc`}
          ></input>
          <div>
            <span>Employed from </span>
            <input
            onChange={this.props.onChangeWork}
            value={state[stateName].start}
            name={`${stateName}-start`}
            ></input>
            <span> to </span>
            <input
            onChange={this.props.onChangeWork}
            value={state[stateName].end}
            name={`${stateName}-end`}
            ></input>
          </div>
          <button
            className={buttonClass}
            onClick={this.props.onClickWorkExpand}
            name={`btnExp-${this.props.workCount}`}
          >
            {buttonString}
          </button>
        </div>
      );
    } else {
      return (
        <div className={classes}>
          <p>Company: {state[stateName].company}</p>
          <p>Position: {state[stateName].position}</p>
          <p>Work Responsibilities: {state[stateName].desc}</p>
          <p>
            Employed from {state[stateName].start} to {state[stateName].end}
          </p>
        </div>
      );
    }
  }
}

export default Work;
