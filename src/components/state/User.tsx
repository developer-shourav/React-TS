import { useState } from "react";

/* ----------------Example of defining Type of API Fetch unknown data type in useState {union type} */
type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState < AuthUser | null> (null);

  const handleLogin = (): void => {
    setUser({
      name: "Shourav",
      email: "developer.shourav1@gmail.com",
    });
  };

  const handleLogOut = (): void => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log Out</button>
      {user?.name && <p>User Name is {user.name}</p>}
      {user?.email && <p>User Email is {user.email}</p>}
    </div>
  );
}
