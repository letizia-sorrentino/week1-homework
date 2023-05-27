// Homework week 1 - task 1

// Create a new react app
// Create a component
// Include that component in App.jsx
// Pass a prop into the component at #2
// Add some state to the App component
// Optional, update the state created at #5

import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";


class App extends Component {
  state = {count: 0};

onClick = () => {
  console.log('click');
  this.setState({count: this.state.count + 1 });
  console.log(this.state.count);
}

  render() {
    return (
      <div>
        <h1>My Pet Friends</h1>
        <Profile
          firstName={"Fido"}
          img={
            "https://img.freepik.com/free-photo/beagle-dog-sitting-with-white-background_53876-30186.jpg?w=1380&t=st=1685108545~exp=1685109145~hmac=fd99c2e1952d85fefe13bfdcb2efe77311cb526d56dea10305ee680406cf12b8"
          }
          phone={"555-555-555"}
          email={"fido@dog.com"}
        />

        <Profile
          firstName={"Max"}
          img={
            "https://img.freepik.com/free-photo/isolated-shot-rhodesian-ridgeback-puppy-sitting-front-white-wall_181624-45380.jpg?size=626&ext=jpg&ga=GA1.1.1362949502.1683105940&semt=sph"
          }
          phone={"666-666-666"}
          email={"max@dog.com"}
        />
        <Profile
          firstName={"Paco"}
          img={
            "https://img.freepik.com/free-psd/cute-dog-portrait-isolated_23-2150193852.jpg?size=626&ext=jpg&ga=GA1.1.1362949502.1683105940&semt=sph"
          }
          phone={"777-777-777"}
          email={"paco@dog.com"}
        />
        <button className="like-button" onClick={this.onClick}>Like: {this.state.count} </button>

      </div>
    );
  }
}

export default App;
