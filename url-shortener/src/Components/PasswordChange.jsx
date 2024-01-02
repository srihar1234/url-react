import { useState } from "react";
import "./PasswordChange.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function PasswordChange() {

    const navigate = useNavigate();
    const[view,setView] = useState("true");
    const[mail,setMail] = useState();
    const handleForgotPassword = ()=>{
        
        navigate("/resetPassword");
    }
    const handleMailCheck = (mail)=>{
        const email = {
            "email":mail
        }
        axios.post("http://localhost:4002/mailCheck",email)
        .then((res)=>{
            console.log(res);
            alert("VALID MAIL ID");
            setView("false");
        })
        .catch((err)=>{
            alert("INVALID MAIL ID");
            console.log(err);
        });
    }

  return (
    <div className='page'>
      <div className='passwordChange'>
        <h4>CONFIRM YOUR MAIL ID</h4>
        <input type="email" placeholder='Email'
        value={mail}
        onChange={(e)=>setMail(e.target.value)}
        />
        {
          view == "true" ?
          <button onClick={()=>handleMailCheck(mail)}>CHECK</button>
          :
          <button onClick={()=>handleForgotPassword(mail)}>FORGOT PASSWORD</button>
        }
      </div>
    </div>
  )
}

export default PasswordChange
