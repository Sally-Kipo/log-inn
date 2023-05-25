import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleChangeIsLoggedIn = () => {
    setisLoggedIn(prev => !prev);
  };

  const logout = () => {
    setEmail("");
    setPassword("");
    handleChangeIsLoggedIn();
  }

  const logIn = () => {  
    if(email.trim() !== "" && password.trim() !=="") {
      handleChangeIsLoggedIn();
      setError("");
  } else setError("Please fill the inputs");
  }
  return (
    <div>
        {isLoggedIn ? (
          <div>
            <h1>Hello {email}</h1>
            <button onClick={logout}>LOG OUT</button>
          </div>
      ) : (
      <div>
        <input 
        type="Email" placeholder="UserName" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
         <input 
         type="password" placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button onClick={logIn}>LOG IN</button>
        {error &&
         <h3>{error}</h3>}
      </div>
      )}
  </div>
  )
};
  export default App;