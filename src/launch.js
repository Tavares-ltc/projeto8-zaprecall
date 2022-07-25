import React from "react";
import Recall from "./recall";
import Logo from "./logo";

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

function LaunchPage() {
    const [tela, setTela] = React.useState(true)

    return (
        <>
            {(tela) ? (
                <div className="launchPage">
                    <Logo />
                    <div className="button" onClick={() => setTela(!tela)}>
                        <h2>Iniciar Recall!</h2>
                    </div>
                </div>
            ) : (<Recall setTela={setTela} questions={questions}/>)}
        </>
    )
}

export default LaunchPage