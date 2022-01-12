import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      general: {
        name: "",
        phoneNo: "",
        address: "",
        email: "",
      },
      education1: {
        visible: true,
        schoolName: "",
        degree: "",
        year: "",
        expBtn: true,
      },
      education2: {
        visible: false,
        schoolName: "",
        degree: "",
        year: "",
        expBtn: true,
      },
      education3: {
        visible: false,
        schoolName: "",
        degree: "",
        year: "",
        expBtn: true,
      },
      work1: {
        visible: true,
        company: "",
        position: "",
        desc: "",
        start: "",
        end: "",
        expBtn: true,
      },
      work2: {
        visible: false,
        company: "",
        position: "",
        desc: "",
        start: "",
        end: "",
        expBtn: true,
      },
      work3: {
        visible: false,
        company: "",
        position: "",
        desc: "",
        start: "",
        end: "",
        expBtn: true,
      },
    };
  }

  onChange = (event) => {
    const source = event.target.name.split("-");
    this.setState({
      ...this.state,
      [source[0]]: {
        ...this.state[source[0]],
        [source[1]]: event.target.value,
      },
    });
  };

  onChangeEdu = (event) => {
    const source = event.target.name.split("-");
    this.setState({
      ...this.state,
      [source[0]]: {
        ...this.state[source[0]],
        [source[1]]: event.target.value,
      },
    });
  };

  onChangeWork = (event) => {
    const source = event.target.name.split("-");
    this.setState({
      ...this.state,
      [source[0]]: {
        ...this.state[source[0]],
        [source[1]]: event.target.value,
      },
    });
  }

  onClickEduExpand = (event) => {
    let btnID = parseInt(event.target.name.split("-")[1]);
    if (btnID === 3) return;
    if (btnID === 1 && this.state.education3.visible === true) return;
    const currEdu = `education${btnID}`;
    btnID++;
    const nextEdu = `education${btnID}`;
    this.setState({
      ...this.state,
      [nextEdu]: {
        ...this.state[nextEdu],
        visible: !this.state[nextEdu].visible,
      },
      [currEdu]: {
        ...this.state[currEdu],
        expBtn: !this.state[currEdu].expBtn,
      },
    });
  };

  onClickWorkExpand = (event) => {
    let btnID = parseInt(event.target.name.split("-")[1]);
    if (btnID === 3) return;
    if (btnID === 1 && this.state.work3.visible === true) return;
    const currWork = `work${btnID}`;
    btnID++;
    const nextWork = `work${btnID}`;
    this.setState({
      ...this.state,
      [nextWork]: {
        ...this.state[nextWork],
        visible: !this.state[nextWork].visible,
      },
      [currWork]: {
        ...this.state[currWork],
        expBtn: !this.state[currWork].expBtn,
      },
    });
  }

  onClickSubmit = () => {
    if (this.state.editMode) {
      this.setState({
        editMode: !this.state.editMode,
      });
    }
    console.log(this.state);
  };

  onClickEdit = () => {
    if (!this.state.editMode) {
      this.setState({
        editMode: !this.state.editMode,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h2>General Information</h2>
        <General onChange={this.onChange} stateInfo={this.state} />
        <h2>Education</h2>
        <Education
          onChangeEdu={this.onChangeEdu}
          stateInfo={this.state}
          eduCount="1"
          onClickEduExpand={this.onClickEduExpand}
        />
        <Education
          onChangeEdu={this.onChangeEdu}
          stateInfo={this.state}
          eduCount="2"
          onClickEduExpand={this.onClickEduExpand}
        />
        <Education
          onChangeEdu={this.onChangeEdu}
          stateInfo={this.state}
          eduCount="3"
          onClickEduExpand={this.onClickEduExpand}
        />
        <h2>Work Experience</h2>
        <Work 
        onChangeWork={this.onChangeWork}
        stateInfo={this.state}
        workCount="1"
        onClickWorkExpand={this.onClickWorkExpand}
        />
        <Work 
        onChangeWork={this.onChangeWork}
        stateInfo={this.state}
        workCount="2"
        onClickWorkExpand={this.onClickWorkExpand}
        />
        <Work 
        onChangeWork={this.onChangeWork}
        stateInfo={this.state}
        workCount="3"
        onClickWorkExpand={this.onClickWorkExpand}
        />
        <button onClick={this.onClickSubmit}>Submit</button>
        <button onClick={this.onClickEdit}>Edit</button>
      </div>
    );
  }
}

export default App;
