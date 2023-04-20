import styles from "./Program.module.css";
import { Footer } from "../../Components/footer/Footer";
import {Data} from "./Data";

export function Program() {
  return (
    <>
    <div className={styles.mainContainer}>
      <h1>Trainer section</h1>
      
      <div className={styles.container}>
        {Data.map((item, index) => {
          return (
            <div className={styles.card} key={item.id}>
              <img src={item.Img} alt="programs" />
              <h3>{item.Name}</h3>
            </div>
          );
        })}
      </div>
      <Footer />
      </div>
      
    </>
  );
}