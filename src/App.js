import React, { Component } from "react";
import General from "./components/General";

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

  onClickSubmit = () => {
    if (this.state.editMode) {
      this.setState({
        editMode: !this.state.editMode,
      });
  }
}

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
        <button onClick={this.onClickSubmit}>Submit</button>
        <button onClick={this.onClickEdit}>Edit</button>
      </div>
    );
  }
}

export default App;
