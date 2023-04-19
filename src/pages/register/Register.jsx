import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import styles from './Register.module.css';
import Joi from 'joi'

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const navigate = useNavigate()

  const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(6)
        .max(20)
        .required(),

        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password')
})

// useEffect( ()=>{
//   schema.validateAsync(user[0]).then((response)=> {
//     localStorage.setItem("user", JSON.stringify(user))
//   })
//   .catch((error) => {
//     alert(error)
//   });
// },[user])

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
    navigate('/login')
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

  const { error, value } = schema.validate({
    username: fullName,
    // password: password
  });

  // console.log(schema)
  console.log(error)
  // function handleFormChange() {
  //   navigate('login');
  // }

  localStorage.setItem('user', JSON.stringify(user));

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
        {
          error ? <p>{error.message}</p> : ''
        }
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
