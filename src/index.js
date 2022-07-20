import ReactDOM from 'react-dom'
import LaunchPage from './launch'
import Recall from './recall'

function App() {
    return (
        <div className='background'>
            
    {/* <LaunchPage/> */}
    <Recall/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.root'))