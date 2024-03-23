import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import {useNavigate} from "react-router-dom";
export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/homepage",
    element:<HomePage/>
  }
  
])

function App() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/homepage");
  }
  return (
    <div className="App">
        <div className="center-div">
          <button className="btn" onClick={handleClick}>Click Me</button>
        </div>
    </div>
  );
}

export default App;
