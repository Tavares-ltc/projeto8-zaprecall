import React from "react"
function RestartButton({ footerResult, setTela}) {
    function restart() {
        setTela(true)
    }
    if (footerResult === 4) {
        return (
            <div className='restart-button' onClick={restart}>
                <h2>REINICIAR RECALL</h2>
            </div>
        )
    }
    else {
        return <>   </>
    }
}

export default RestartButton