import './styles.css';
import React from "react"
import cabbage from './assets/image1.jpeg'
import mango from './assets/image2.jpeg'
import fig from './assets/image3.jpeg'
import kiss from './assets/image4.jpeg'
import peach from './assets/image5.jpeg'
import avocado from './assets/image6.jpeg'
 


//function definition for App component

//Component is a reusable piece of code that returns an app element
//You can build class and functional components
//functional components take props as an object and return an element
//React Hooks only works with functional components
//Lifecycle methods are a series of events that happen between the initialization
//or creation or unmounting of a component.

const images = [cabbage, mango, fig, kiss, peach, avocado]



const App = () => {

console.log(images)


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
        <img alt="" src={images[0]}/>
      </div>

    </div>

  )

}

export default App;
