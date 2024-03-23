const Card=({item,deleteItem,id})=>{
    return (
        <div className="card-container">
            <h3>{item}</h3>
            <button onClick={()=>deleteItem(id)}>-</button>
        </div>
    )
}
export default Card;