import { data } from "./Constants";
import {useEffect, useState} from "react";
function App() {
  const [activeIndex,setActiveIndex]=useState(0);
  const handleNext=()=>{
    setActiveIndex((activeIndex+1)%data.length)
  }

  const handlePrevious=()=>{
    !activeIndex?setActiveIndex(data.length-1):setActiveIndex(activeIndex-1)
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      handleNext();
    },3000)
    return ()=>{
      clearTimeout(timer)
    }
  },[activeIndex])

  return (
    <div className="App">
      <h1>Carousel</h1>
      <div className="container">
        <button onClick={handlePrevious}>◀️</button>

        <div className="image-container">
          {data.map((item,index)=>{
            return <img src={item} alt="wallpaper" 
              className="image"
              style={{display:index===activeIndex?"block":"none"}}
            />
          })}
        </div>

        <button onClick={handleNext}>▶️</button>
      </div>
    </div>
  );
}

export default App;
