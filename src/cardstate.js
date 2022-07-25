import React from 'react'

let alreadyChosedOneCard = false

function AskCards({ question, answer, index, setResultList, setFooterResult, footerResult }) {
    const [cardState, setCardState] = React.useState("")



    function pushResultList(icon) {
        alreadyChosedOneCard = false
        setResultList((data) => ([...data, icon]))
        setCardState(icon)
        setFooterResult(footerResult + 1)
    }

    if (cardState === "") {
        return (
            <div key={index} onClick={() => { if (!alreadyChosedOneCard) { setCardState("clicked") } }} className="askCard">
                <h2>Pergunta {index + 1}</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }
    if (cardState === "clicked") {
        alreadyChosedOneCard = true
        return (
            <div key={index} className="askCard clicked">
                <h2>{question}</h2>
                <img src='/img/setinha.png' onClick={() => setCardState("flipped")}></img>
            </div>
        )
    }
    if (cardState === "flipped") {
        return (
            <div key={index} className="askCard clicked">
                <h2>{answer}</h2>

                <div className='buttons-container'>
                    <div onClick={() => pushResultList("close-circle")}>
                        <h2>Não lembrei</h2>
                    </div>
                    <div onClick={() => pushResultList("help-circle")}>
                        <h2>Quase não lembrei</h2>
                    </div>
                    <div onClick={() => pushResultList("checkmark-circle")}>
                        <h2>Zap!</h2>
                    </div>
                </div>
            </div>
        )

    }
    // dificuldade de automatizar o ion-icon me fez repetir o código:
    if (cardState === "close-circle") {
        return (
            <div key={index} className="askCard">
                <h2 className='red'>Pergunta {index + 1}</h2>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        )
    }
    if (cardState === "help-circle") {
        return (
            <div key={index} className="askCard">
                <h2 className='yellow'>Pergunta {index + 1}</h2>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        )
    }
    if ( cardState === "checkmark-circle"){
        return (
            <div key={index} className="askCard">
                <h2 className='green'>Pergunta {index + 1}</h2>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        )
    }
    

}
export default AskCards
