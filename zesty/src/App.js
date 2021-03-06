import './styles.css';
import React, {useState} from "react"
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

const Loading = ({calculatedWidth}) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress 
        id="images-loaded" 
        max="100" 
        value={calculatedWidth}
      ></progress>
    </div>
  </aside>
)



const App = () => {

        //state v    , function v
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0)





  const handleClick = () => {
    const length = images.length - 1

    setCurrentImage((currentImage) => {

      return currentImage < length ? currentImage + 1 : 0

    })
  }

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  }


 


  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project<br/>
          by Ella Fieldling
        </h2>
        {/* <button onClick={handleClick}>Click here</button> */}
        {/* <input type="text" name="example" autoComplete="off" onChange={handleClick}/> */}
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100}/>
        )}
        
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
      {images.map((imageURL, index) => (
        <img 
          alt="" 
          key={imageURL} 
          src={imageURL} 
          onClick={handleClick} 
          onLoad={handleImageLoad}
          // style={{opacity: currentImage === index ? 1 : 0}}  
          className={currentImage === index ? "display" : "hide"}
      />
      ))}


      </figure>

    </section>

  )

}

export default App;
