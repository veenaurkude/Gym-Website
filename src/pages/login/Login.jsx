import styles from './Login.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    const navigate = useNavigate()

    function handleEmail(e) {
        setEmail(e.target.value);
        console.log(email)
      }
    
      function handlePassword(e) {
        setPassword(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault()
      }

      function handleLogin() {
        localStorage.getItem('email')
      }

      function handleFormChange() {
        navigate('./register')
      }
    
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input className={styles.loginInput} id="email" type="email" value={email} placeholder="enter your email..." onChange={handleEmail} required/>
        
        <label htmlFor="pwd"></label>
        <input
          id="pwd"
          type="password"
          placeholder="enter your password..."
          value={password}
          className={styles.loginInput}
          onChange={handlePassword}
          required
        />

        <button className={styles.logbtn} onClick={handleLogin}>Login</button>
      </form>

      <h4 className={styles.regfoot}>Not registerd Yet? <span className={styles.spanReg} onClick={handleFormChange}>Register here...</span></h4>
      </div>
    </div>
  );
}
