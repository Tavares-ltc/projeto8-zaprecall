import React from 'react'
import Footer from './footer'
import AskCards from './cardstate'
console.log("Foi identificado um erro ao carrergar a página, se acontecer tente recarregar.")

function Recall({ setTela, questions }) {
    const [footerResult, setFooterResult] = React.useState(0)
    const [resultList, setResultList] = React.useState([])



        return (
            <div className="recallPage">
                <div className="logo">
                    <img src="img/logo-pequeno.png"></img>
                    <h1>ZapRecall</h1>
                </div>
                {questions.map((data, index) => (<AskCards question={data.question} answer={data.answer} index={index} setResultList={setResultList} resultList={resultList} setFooterResult={setFooterResult} footerResult={footerResult} />))}
                <Footer resultList={resultList} footerResult={footerResult} setTela={setTela}></Footer>
            </div>
        )
}


export default Recall