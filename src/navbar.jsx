import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import {CgGym} from 'react-icons/cg'

export function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.gymContainer}>
        <NavLink className={styles.linkGym} to="/">
          Gym<CgGym />
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="aboutus">
          About Us
        </NavLink>
        <NavLink className={styles.link} to="program">
          Program
        </NavLink>
        <NavLink className={styles.link} to="training">
          Training
        </NavLink>
        <NavLink className={styles.link} to="pricing">
          Pricing
        </NavLink>
      </div>
      <div className={styles.joinBtn}>
        <NavLink className={styles.linkJoin} to='login'>
          Join Us
        </NavLink>
      </div>
      {/* <NavLink className={styles.link} to='/login/register'></NavLink> */}
    </div>
  );
}
