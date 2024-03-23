import {useState} from "react";
import Card from "./Card";
function App() {
  const [text,setText]=useState("");
  const [list,setList]=useState([]);
  const handleAdd=()=>{
    setList((prev)=>[...prev,text]);
    setText("");
  }
  const handleDelete=(id)=>{
   setList((oldItem)=>{
    return oldItem.filter((item,index)=>{
      return index!==id
    })
   })
  }
  return (
    <div className="App">
      <div className="center-div">
          <h1>To Do List</h1>
          <div className="input-container">
            <input type="text" value={text}
              onChange={(e)=>setText(e.target.value)}
              className="input-text"
            />
            <button className="btn" onClick={handleAdd}>Add</button>
          </div>
          <div className="list-container">
            {
              list.map((item,index)=>{
                  return <Card item={item} key={index} deleteItem={handleDelete} id={index}/>
              })
            }
          </div>
          {list.length!==0 && <button className="clear-btn" onClick={()=>setList([])}>Clear All</button>}
          
      </div>
    </div>
  );
}

export default App;
