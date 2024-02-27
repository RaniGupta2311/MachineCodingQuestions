import {useState} from "react";
import Card from "./Card";
import {data} from "./Data"

function App() {
  const [showIndex,setShowIndex]=useState(null);
  const handleSetShowIndex=(index)=>{
    if(showIndex===index){
      setShowIndex(-1);
      return
    }
    setShowIndex(index);
  }
  return (
    <div className="App">
        <div className="center_div">
            <h1>ACCORDION</h1>

            <div className="items_container">
            {
              data.map((ele,index)=>{
              return <Card {...ele} showItems={index===showIndex?true:false} handleSetShowIndex={()=>handleSetShowIndex(index)}/>
            })
            }
            </div>
        </div>
    </div>
  );
}

export default App;
