import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'

function App() {

  const personName = {
    firstName: "MD",
    lastName:"Al Amin"
  };

  return (
    <div className='App'>
      <Greet unreadMessageCount={5} name="Shourav" isLoggedIn={true} />
      <Person name={personName} /> 
    </div>
  )
}

export default App
