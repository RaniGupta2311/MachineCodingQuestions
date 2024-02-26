import {useState} from "react";
import { data } from "./Data";

function App() {
  const [searchText,setSearchText]=useState("");
  return (
    <div className="App">
      <h1>List Product On Filter</h1>
      <input className="search" value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
      />
      <div className="search_results">
        {
          data.filter((item)=>{
            if(searchText==""){
              return item;
            }
            else if(item.title.toLowerCase().includes(searchText.toLocaleLowerCase()))
            return item;
            
          })
          .map((item)=>{
          return <p>{item.title}</p>
        })}
      </div>
    </div>
  );
}

export default App;
