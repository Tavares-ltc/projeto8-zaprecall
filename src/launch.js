
function Logo() {
    return(
        <div className="logo">
    <img src="img/logo.png"></img>
    <h1>ZapRecall</h1>
    </div>
    )
}
function LaunchPage() {
    return(
<div className="launchPage">
    <Logo/>
    <div className="button">
    <h2>Iniciar Recall!</h2>
    </div>
</div>
)
}

export default LaunchPage