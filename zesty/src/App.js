import './styles.css';
import React from "react"

//function definition for App component

//Component is a reusable piece of code that returns an app element
//You can build class and functional components
//functional components take props as an object and return an element
//React Hooks only works with functional components
//Lifecycle methods are a series of events that happen between the initialization
//or creation or unmounting of a component.


const App = () => {



  return (
    <div className = "App">
      <div className="title">
        <h1>Zesty</h1>
        <h2>
          A photography project<br/>
          by Ella Fieldling
        </h2>
      </div>

      <div className="image-container">
        <img alt="" src=""/>
      </div>

    </div>

  )

}

export default App;
