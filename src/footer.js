import React from 'react'
import RestartButton from './restartButton'

function FooterCard({ resultList, footerResult, children, setTela }) {
    return (
        <div className={(footerResult === 4) ? "footer fineshed" : "footer"}>
            {children}
            <div>
                <h2>
                    {footerResult}/4 CONCLUÍDOS
                </h2>
                <div className={'results-container'}>

                    {resultList.map(icon => (<Icon name={icon}></Icon>))}
                </div>
            </div>
                <RestartButton footerResult={footerResult} setTela={setTela}/>
        </div>
    )
}

function Footer({ resultList, footerResult, setTela }) {

    if (footerResult < 4) {
        return (
            <FooterCard resultList={resultList} footerResult={footerResult} > </FooterCard>
        )
    }
    else if (resultList.includes('close-circle')) {
        return (
            <FooterCard resultList={resultList} footerResult={footerResult} setTela={setTela}>
                <h2><strong>😢 Putz...</strong></h2>
                <div>
                    <p>Ainda faltam alguns... </p>
                    <p> Mas não desanime!</p>
                </div>

            </FooterCard>
        )
    }
    else {
        return (
            <FooterCard resultList={resultList} footerResult={footerResult} setTela={setTela}>
                <h2><strong>🥳  Parabéns!</strong></h2>
                <div>
                    <p>Você não esqueceu de</p>
                    <p>nenhum flashcard!</p>
                </div>
            </FooterCard>
        )
    }
}
function Icon({ name }) {
    return (
        <>
            <ion-icon name={name}></ion-icon>
        </>
    )
}

export default Footer