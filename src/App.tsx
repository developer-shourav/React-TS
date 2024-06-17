import './App.css'
import Greet from './components/Greet'

function App() {

  return (
    <div className='App'>
      <Greet unreadMessageCount={5} name="Shourav" isLoggedIn={true} />
    </div>
  )
}

export default App
