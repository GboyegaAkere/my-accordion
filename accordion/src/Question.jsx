import React from "react";
import{AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function Question({title, info}){
    const [change, setChange] =React.useState(true)

    function changeButton(){
        setChange(current => !current);
    }

    return(
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={changeButton}>{change? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            {change &&<p>{info}</p>}
        </article>
    )
}

export default Question