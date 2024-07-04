import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {

    const userContext = useContext(UserContext);

    const handleLogIn = () => {
        if(userContext){
            userContext.setUser({
                name: "Shourav",
                email: "developer.shourav1@gmail.com"
            })
        }
    }
    const handleLogOut = () => {{
        if(userContext){
            userContext.setUser(null)
        }
    }}


    return (
        <div>
            <button onClick={handleLogIn} >LogIn</button>
            <button onClick={handleLogOut} >Log Out</button>
            
            <div>User name is: {userContext?.user?.name} </div>
            <div>User email is: {userContext?.user?.email}</div>
        </div>
    );
};

export default User;