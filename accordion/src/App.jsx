import React from "react";
import data from './data'
import Question from "./Question";


function App(){
  const [questions, setQuestion] = React.useState(data)
  return(
    <main>
      <div className="container">
        <h3>Quesions and answer about login</h3>
        <section className="info">
          {questions.map((question)=>{
            return(
              <>
                <Question key={question.id} {...question}/>
              </>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App