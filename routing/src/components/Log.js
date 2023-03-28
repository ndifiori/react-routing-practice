import React,  { useState } from "react";

function Log() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true)
  };

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div>
      {loggedIn ? (
        <div> 
          <p> Welcome Back</p>
          <button onClick={handleLogout}> Logout</button>
        </div>
      ) : (
        <div>
          <p> Login to see your profile</p>
          <button onClick={handleLogin}> Login </button>
        </div>
      )}
    </div>
  )
}

export default Log