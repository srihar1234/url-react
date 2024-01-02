import { useState } from "react";
import "./ResetPassword.css";


function ResetPassword() {

    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const handleChangePassword = ()=>{
        
    }

  return (
    <div className="page">
      <div className="change">
        <h3>RESET PASSWORD</h3>
        <input type="password" placeholder="NEW PASSWORD" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <input type="password" placeholder="CONFIRM PASSWORD"
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        />
        <button onClick={()=>handleChangePassword()}>CHANGE PASSWORD</button>
      </div>
    </div>
  )
}

export default ResetPassword
