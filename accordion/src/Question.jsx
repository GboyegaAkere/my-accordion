import React from "react";
import{AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function Question({question}){
    const [change, setChange] =React.useState(true)

    function changeButton(){
        setChange(prevState => !prevState);
    }

    return(
        <article className='question'>
            <header>
                <h4>{question.title}</h4>
                <button className="btn" onClick={changeButton}>{change? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            {change &&<p>{question.info}</p>}
        </article>
    )
}

export default Question