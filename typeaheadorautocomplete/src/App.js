import {useState,useEffect} from "react";
import { EMP_URL } from "./Constant";

function App() {
  const [list,setList]=useState([]);
  const [searchText,setSearchText]=useState("");
  useEffect(()=>{
    getEmployeeData()
  },[])

  async function getEmployeeData(){
    const d=await fetch(EMP_URL);
    const res=await d.json();
    console.log(res.users);
    setList(res.users);
  }

  return (
    <div className="App">
      <h1>Typeahead Suggestions Or Autocomplete</h1>
      <div classame="search_container">
        <input className="searchText" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className="btn">Search</button>
      </div>

      {/* here we dont have fullname property in api so comparing with both firstName and lastName
      if we fullName we can do like
      return searchText && item.fullName.toLowerCase().startsWith(searchText) && searchText!==item.fullName
        */}

      <div className="dropdown">
        {list.filter((item)=>{
            return searchText && (item.firstName.toLowerCase().startsWith(searchText) || item.lastName.toLowerCase().startsWith(searchText)) && searchText!==(item.firstName+" "+item.lastName)
        })
        .map((item)=>{
          return <p key={item.id}>{item.firstName} {item.lastName}</p>
        })
        }
      </div>
    </div>
  );
}

export default App;
