import {useState,useEffect} from "react";
function App() {
  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(0);

  async function fetchData(){
    const data=await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const jsonData=await data.json();
    // console.log(jsonData.products);
    // console.log(jsonData.total);
    if(jsonData && jsonData.products){
      setProducts(jsonData.products);
      setTotalPages(jsonData.total / 10)
    }
  }
  useEffect(()=>{
    fetchData()
  },[page]);

  const pageHandler=(selectedPage)=>{
      if(selectedPage>=1 && selectedPage<=totalPages && selectedPage!==page)
      setPage(selectedPage);
  } 

  return (
    <div className="App">
     {products.length>0 && (<div className="products">
        {products.map((item)=>{
          return <div key={item.id} className="product">
            <img src={item.thumbnail} alt={item.title}/>
            <p>{item.title}</p>
          </div>
        })}
     </div>)}
     {products.length>0 && (<div className="pagination">
      <span className={page>1?"":"pagination_disabled"} onClick={()=>pageHandler(page-1)}>◀️</span>
      {[...Array(totalPages)].map((_,i)=>{
        return <span key={i} onClick={()=>pageHandler(i+1)} className={page===i+1?"pagination_selected":""}>
          {i+1}
        </span>
      })}
      <span className={page<totalPages?"":"pagination_disabled"} onClick={()=>pageHandler(page+1)}>▶️</span>
     </div>)}
    </div>
  );
}

export default App;
