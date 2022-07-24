import ReactDOM from 'react-dom'
import './reset.css'
import './style.css'
import LaunchPage from './launch'

function App() {
    return (
        <div className='background'>

            <LaunchPage />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))