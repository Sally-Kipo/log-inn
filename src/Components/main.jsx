// import HomePage from "./Components/Homepage";
import { useState } from 'react';
import icon from '../Images/icon.png';
import './main.css';
import HomePage from './Homepage';


function Main () {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [circle] = useState("");
    const logBox = "log-box";
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
         <div>
        {isLoggedIn ? (
          <div>
            <HomePage email={email} logout={logout} circle={circle} />
          </div>
          
      ) : (
        <div className={logBox}>
        <div className='text'>
        <h2>Login</h2>
        <p>Hello My Friend</p>
        </div>
          <div className="circle"><img src={icon} alt=''></img></div>
        <input 
        type="Email" placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
         <input 
         type="password" placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button onClick={logIn}>LOG IN</button>
        {/* {error &&
         <h3>{error}</h3>} */}
      </div>
      )}
  </div>       
        </div>
    )
}
export default Main;