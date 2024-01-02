import "./Registration.css";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function Register() {

  const navigate = useNavigate();
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post("http://localhost:4002/signup",values)
      .then((res)=>{
        alert("SIGN UP SUCCESSFULL");
        console.log(res);
        navigate("/");
      })
      .catch((err)=>{
        console.log(err);
        alert("SOMETHING WRONG");
      });
    }
  });


  return (
    <div className='page'>
      <form className='register' onSubmit={handleSubmit}>
        <h2>WELCOME</h2>

        <input type="email" placeholder="EMAIL"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input type="text" placeholder="FIRST NAME"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input type="text" placeholder="LAST NAME"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input type="password" placeholder="PASSWORD"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button type="submit">SIGN UP</button>
        <Link to="/">ALREADY HAVE ACCOUNT..LOG IN</Link>
      </form>
    </div>
  )
}

export default Register
