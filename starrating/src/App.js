import {useState} from "react";
import {FaStar} from "react-icons/fa";
function App() {
  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);
  return (
    <div className="App">
        <h1>Star Rating</h1>
        <div>
        {
          [...Array(5)].map((ele,index)=>{
            const currentRating=index+1;
            return (<label key={index}>
                <input type="radio" value={currentRating} name={rating} onClick={()=>setRating(currentRating)}/>
                <FaStar fontSize={50} onMouseEnter={()=>setHover(currentRating)}
                  onMouseLeave={()=>setHover(null)}
                  color={currentRating<=(hover||rating)?"green":"grey"}
                ></FaStar>
            </label>)
          })
        }
        </div>
    </div>
  );
}

export default App;
