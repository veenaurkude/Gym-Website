import styles from "./Login.module.css";
import { useState } from "react";
import { getUsers } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState([]);

  const [passError, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [match, setMatch] = useState("");

  const navigate = useNavigate();

  const users = getUsers();

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setEmailError("Email is required!");
      return false;
    } else if (!regex.test(email)) {
      setEmailError("It should be a valid email address!");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!password) {
      setPassError("Password is required!");
      return false;
    } else if (!regex.test(password)) {
      setPassError(
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      );
      return false;
    } else {
      setPassError("");
      return true;
    }
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailValue = validateEmail();
    const userValue = validatePassword();
    
    if(emailValue && userValue) {
      let details = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (details && emailValue && userValue) {
        navigate("/");
      } else {
        setMatch("Please Register");
      }
    }
    }

  function handleFormChange() {
    navigate("./register");
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}></div>

      <div className={styles.loginContainer}>
        <h4 className={styles.match}>{match}</h4>
        <h1 className={styles.logHead}>Login</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            className={styles.loginInput}
            id="email"
            type="email"
            value={email}
            placeholder="enter your email..."
            onChange={handleEmail}
          />

          <span className={styles.errLogEmail}>{emailError}</span>

          <label htmlFor="pwd"></label>
          <input
            id="pwd"
            type="password"
            placeholder="enter your password..."
            value={password}
            className={styles.loginInput}
            onChange={handlePassword}
          />
          <span className={styles.errLogPass}>{passError}</span>

          <button className={styles.logbtn}>Login</button>
        </form>

        <h4 className={styles.regfoot}>
          Not registerd Yet?{" "}
          <span className={styles.spanReg} onClick={handleFormChange}>
            Register here...
          </span>
        </h4>
      </div>
    </div>
  );
}
