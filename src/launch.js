import React from "react";
import Recall from "./recall";

function Logo() {
    return (
        <div className="logo">
            <img src="img/logo.png"></img>
            <h1>ZapRecall</h1>
        </div>
    )
}

function LaunchPage() {
    const [tela, setTela] = React.useState(false)

    return (
        <>
            {(tela) ? (
                <div className="launchPage">
                    <Logo />
                    <div className="button" onClick={() => setTela(!tela)}>
                        <h2>Iniciar Recall!</h2>
                    </div>
                </div>
            ) : (<Recall />)}
        </>
    )
}

export default LaunchPage