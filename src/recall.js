import React from 'react'
const questionsList = [
    { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
    { question: 'O React é __ ', answer: 'uma biblioteca JavaScript para construção de interfaces' },
    { question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula' },
    { question: 'Podemos colocar __ dentro do JSX  ', answer: 'expressões' },
    { question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
    { question: 'Usamos o npm para', answer: 'gerenciar os pacotes necessários e suas dependências' },
    { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes' },
    { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
]

const answerStatusList = []
const sortedNumbers = []
const questions = []
function sort() {
    for (let i = 0; i < 4; i++) {

        let num = Math.floor(Math.random() * 9)
        if (sortedNumbers.includes(num)) {
            i--
        }
        else {
            sortedNumbers.push(num)
            questions.push(questionsList[num])
        }
    }
}
sort();
let alreadyChosedOneCard = false

function Icon({icon}) {
    console.log(icon)
    return (
        <ion-icon name={icon}></ion-icon>
    )
}


function AskCards({ question, answer, index }) {
    const [cardState, setCardState] = React.useState("")
    
    function pushAnswerStatusList(icon) {
        answerStatusList.push(icon)
        setCardState("")
        console.log(answerStatusList)
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
        alreadyChosedOneCard = false
        return (
            <div key={index} className="askCard clicked">
                <h2>{answer}</h2>

                <div className='buttons-container'>
                    <div onClick={() => pushAnswerStatusList("close-circle")}>
                        <h2>Não lembrei</h2>
                    </div>
                    <div onClick={() => pushAnswerStatusList("help-circle")}>
                        <h2>Quase não lembrei</h2>
                    </div>
                    <div onClick={() => pushAnswerStatusList("checkmark-circle")}>
                        <h2>Zap!</h2>
                    </div>
                </div>
            </div>
        )
    }
    
}

function Recall() {
    const [teste, setTeste] = React.useState('')

    return (
        <div className="recallPage">
            <div className="logo">
                <img src="img/logo-pequeno.png"></img>
                <h1>ZapRecall</h1>
            </div>
            {questions.map((data, index) => (<AskCards question={data.question} answer={data.answer} index={index} />))}
            <div className="footer">
                <h2>
                    0/4 CONCLUÍDOS
                    {answerStatusList.map(icon => <Icon name={icon}></Icon>)}
                </h2>
            </div>
        </div>
    )
}


export default Recall