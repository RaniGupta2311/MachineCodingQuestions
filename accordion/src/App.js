import {useState} from "react";
import Card from "./Card";
import {data} from "./Data"

function App() {
  const [show,setShow]=useState(true);
  const [showIndex,setShowIndex]=useState(null)
  const handleShow=(index)=>{
    setShow(!show);
    setShowIndex(index)
  }

  return (
    <div className="App">
        <div className="center_div">
            <h1>ACCORDION</h1>
            <div className="items_container">
            {
              data.map((ele,index)=>{
              return <Card {...ele} show={index===showIndex && show} handleShow={()=>handleShow(index)}/>
            })
            }
            </div>
        </div>
    </div>
  );
}

export default App;
