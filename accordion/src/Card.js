const Card=({id,ques,ans,showItems,handleSetShowIndex})=>{
  return <div className="card_container">
        <div className="ques_container">
            <h3>{ques}</h3>
            <button className="toggle_btn" onClick={handleSetShowIndex}>
                    {showItems?"-":"+"}
            </button>
        </div>
        {showItems && <div className="ans_container"><p>{ans}</p></div>}
    </div>
}
export default Card;