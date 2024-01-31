// import {useState} from "react";

const Card=({id,ques,ans,show,handleShow})=>{
    // const [show,setShow]=useState(false);

    return <div className="card_container">
        <div className="ques_container">
            <h3>{ques}</h3>
            <button className="toggle_btn" onClick={()=>handleShow()}>
                    {show?"-":"+"}
            </button>
        </div>
        {show && <div className="ans_container"><p>{ans}</p></div>}
    </div>
}
export default Card;