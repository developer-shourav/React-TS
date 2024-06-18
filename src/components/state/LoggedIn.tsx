import { useState } from "react";


/*  Here is the example default value instance type . if the  default value is defined then the type will taken automatically by the typescript */
const LoggedIn = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoggedIn = (): void => {
    setIsLoggedIn(true)
  };

  const handleLogOut = (): void => {
    setIsLoggedIn(false)
  };

  return (
    <div>
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLogOut}>Log Out</button>
      <h3>Uer is {isLoggedIn ? "Logged In" : "Logged Out"}</h3>
    </div>
  );
};

export default LoggedIn;
