import { Link, useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import axios from "axios";
import "./Login.css";


function Login() {


    const navigate = useNavigate();
    const {values,handleChange,handleBlur,handleSubmit} = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:(values)=>{
            console.log(values);
            axios.post("http://localhost:4002/login",values)
            .then((res)=>{
                alert("LOGIN SUCCESSFULL");
                console.log(res);
                navigate("/home");
            })
            .catch((err)=>{
                console.log(err);
                alert("CHECK USER MAIL OR PASSWORD")
            })
        }
    })

  return (
    <div className='page'>
        <form className='login' onSubmit={handleSubmit}>
            <h2>WELCOME</h2>

            <input type="email" placeholder="EMAIL"
                   name="email"
                   value={values.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
            />
            <input type="password" placeholder="PASSWORD"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button type="submit">LOGIN</button>
            <Link to="/passwordchange">FORGOT PASSWORD?</Link>
            <Link to="/register">DON`T HAVE ACCOUNT..SIGN UP</Link>
        </form>    
    </div>
  )
}

export default Login
