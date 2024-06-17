import "./App.css";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
/* import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList"; */
/* import Status from "./components/Status"; */

function App() {
  /*   const personName = {
    firstName: "MD",
    lastName: "Al Amin",
  };

  const nameList = [
    {
      firstName: "MD",
      lastName: "Al Amin",
    },
    {
      firstName: "Sakal",
      lastName: "Sarkar",
    },
    {
      firstName: "Shourav",
      lastName: "Raj",
    },
  ];
 */
  return (
    <div className="App">
      {/*  <Greet unreadMessageCount={5} name="Shourav" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}

      {/* --------------- */}
      {/* <Status status="success" /> */}

      <Heading>Heading main Title: Welcome To React TS Course</Heading>

      <Oscar>
        <Heading>The Golden Golden Kela Awards Goes of Jayed Kan</Heading>
      </Oscar>
    </div>
  );
}

export default App;
