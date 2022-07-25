import React from "react";
import Recall from "./recall";
import Logo from "./logo";

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
            ) : (<Recall setTela={setTela} />)}
        </>
    )
}

export default LaunchPage