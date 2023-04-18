import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import styles from './Register.module.css';

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const navigate = useNavigate()

  function handleName(e) {
    setFullName(e.target.value);
    // console.log(fullName)
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleRegister() {
    navigate('/')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setUser([...user,{
        id: Date.now(),
        fullName: fullName,
        email: email,
        password: password
    }])
    setFullName('')
    setEmail('')
    setPassword('')
    console.log(user)
  }

  // function handleFormChange() {
  //   navigate('login');
  // }

  localStorage.setItem('user', JSON.stringify(user))

  return (
    <div className={styles.regContainer}>
      <div className={styles.registerContainer}>
      <form className={styles.regFormContainer} onSubmit={handleSubmit}>
        <label htmlFor="fname"></label>
        <input
          id="fname"
          type="text"
        //   autoComplete="off"
          value={fullName}
          placeholder="enter your name..."
          onChange={handleName}
          className={styles.regInput}
          required
        />
        <br />

        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="enter your email..."
          onChange={handleEmail}
          className={styles.regInput}
          required
        />
        <br />

        <label htmlFor="pwd"></label>
        <input
          id="pwd"
          type="password"
          placeholder="enter your password..."
          value={password}
          onChange={handlePassword}
          className={styles.regInput}
          required
        />
        <br />

        <button className={styles.regbtn} onClick={handleRegister}>Register</button>
      </form>

      </div>
    </div>
  );
}
