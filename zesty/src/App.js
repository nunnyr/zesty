//import './App.css';
import React from "react"

//function definition for App component

//Component is a reusable piece of code that returns an app element
//You can build class and functional components
//functional components take props as an object and return an element
//React Hooks only works with functional components
//Lifecycle methods are a series of events that happen between the initialization
//or creation or unmounting of a component.


const App = () => {


  const building = "TPL building"
  return (
    <div className = "App">
      <h1>Hello SoHo</h1>
      <h2>What will we build</h2>
      <p>{building}</p>


    </div>

  )

}

export default App;
