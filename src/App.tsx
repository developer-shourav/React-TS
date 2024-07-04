import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
/* import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext"; */
/* import Counter from "./components/Counter"; */
/* import User from "./components/state/User"; */
/* import { Button } from "./components/Button"; */
/* import LoggedIn from "./components/state/LoggedIn"; */
/* import { Container } from "./components/Containser"; */
/* import { Input } from "./components/Input"; */
/* import Heading from "./components/Heading";
import Oscar from "./components/Oscar"; */
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

      {/* <Heading>Heading main Title: Welcome To React TS Course</Heading>

      <Oscar>
        <Heading>The Golden Golden Kela Awards Goes of Jayed Kan</Heading>
      </Oscar> */}


      {/* ----------------------Typing Event Props --------------- */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id);
        
      }}></Button> */}

     {/*  <Input value="" handleChange={(event) => console.log(event)
      } /> */}


      {/* ------------------Style Props------------------- */}

     {/*  <Container cssStyle={{border:"2px dotted black", minWidth:"500px", minHeight:"300px", borderRadius:"20px", padding:"60px 0 0 0" }} /> */}


     {/* -------------------Typing React Hooks (useState) ----------------------- */}

     {/* <LoggedIn/> */}

     {/* -------------------Typing React Hook (useState) (Advanced) -------------- */}
      
     {/*  <User/> */}

     {/* -------------------Typing React Hook (useReducer) (Advanced) -------------- */}
     {/* <Counter/> */}


     {/* -------------------Typing React Hook (useContext) (Advanced) -------------- */}
    {/*  <ThemeContextProvider>
       <Box/>
     </ThemeContextProvider> */}

     {/* -------------------Typing React Hook (useContext) (Advanced) With Future Value-------------- */}

     <UserContextProvider>
      <User/>
     </UserContextProvider>

    </div>
  );
}

export default App;
