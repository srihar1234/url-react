import './App.css'
import {Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import PasswordChange from './Components/PasswordChange';
import ResetPassword from './Components/ResetPassword';


function App() {


  return (
    <>
      <Routes>
      
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/passwordChange" element={<PasswordChange/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/>
          
      </Routes>
    </>
  )
}

export default App
