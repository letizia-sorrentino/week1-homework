// Homework week 1 - task 1
// Create a new react app 
// Create a component
// Include that component in App.jsx
// Pass a prop into the component at #2
// Add some state to the App component
// Optional, update the state created at #5
import React, { Component } from 'react';

import "./App.css"
import Gallery from "./Gallery.jsx"


class App extends Component {
  state = {  } 
  render() { 
    return (<Gallery/>);
  }
}
 
export default App;