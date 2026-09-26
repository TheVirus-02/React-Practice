import { useState } from "react";
import ProfileVisible from "./ProfileVisibility";
function LoginStatus(){

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)

    function handleLogin(){
        setIsLoggedIn(true)
        setIsAdmin(true)
    }
    function handleLogout(){
        setIsLoggedIn(false)
        setIsAdmin(false)
    }

   return (
    <div>
        <h2>
            {isLoggedIn ? "Welcome User!" : "Please Login"}
        </h2>

        {isLoggedIn ? (<button onClick={handleLogout}>
            Logout
        </button>) : (
            <button onClick={handleLogin}>
                Login
            </button>
        )}

        <div>
            {isAdmin && (
                <div>
                    <h3>Dashboard</h3>
                <button>
                    Admin Panel
                </button>
                <ProfileVisible />
                </div>
            )}
        </div>
        
    </div>
   )
}

export default LoginStatus;