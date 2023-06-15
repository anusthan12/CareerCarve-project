import React from 'react';
import "./App.css";
import Resume from "./components/Resume/Resume";

class App extends React.Component {
  handleClick = () => {
    console.log("Saving the selected list");
  }

  render() {
    return (
      <div className="App">
        <h1>Select your sections</h1>
        <Resume />
        <button className="save-next-btn" onClick={this.handleClick}>Save and Next</button>
      </div>
    );
  }
}

export default App;
