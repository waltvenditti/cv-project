import React, { Component } from "react";

class Education extends Component {
  render() {
    const state = this.props.stateInfo;
    const stateName = `education${this.props.eduCount}`;

    if (state[stateName].visible === false) return(<div></div>);

    let classes = "Education DisplayBox";

    let buttonString;
    
    if (state[stateName].expBtn === true) {
      buttonString = "+";
    } else {
      buttonString = "X";
    }

    let buttonClass;
    if (this.props.eduCount === "3") {
      buttonClass = "roundButtonHidden";
    } else {
      buttonClass = "roundButton";
    }

    if (state.editMode === true) {
      return (
        <div className={classes}>
          <span>School Name: </span>
          <input
            onChange={this.props.onChangeEdu}
            value={state[stateName].schoolName}
            name={`${stateName}-schoolName`}
          ></input>
          <br />
          <span>Degree: </span>
          <input
            onChange={this.props.onChangeEdu}
            value={state[stateName].degree}
            name={`${stateName}-degree`}
          ></input>
          <br />
          <span>Graduated: </span>
          <input
            onChange={this.props.onChangeEdu}
            value={state[stateName].year}
            name={`${stateName}-year`}
          ></input>
          <button className={buttonClass} onClick={this.props.onClickEduExpand} name={`btnExp-${this.props.eduCount}`}>{buttonString}</button>
        </div>
      );
    } else {
      return (
        <div className={classes}>
          <p>School Name: <strong>{state[stateName].schoolName}</strong></p>
          <p>Degree: {state[stateName].degree}</p>
          <p>Graduated: {state[stateName].year}</p>
        </div>
      );
    }
  }
}

export default Education;
