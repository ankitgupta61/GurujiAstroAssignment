import Card from "./UI/Card";
import { useState } from "react";
import styles from "./Home.module.css";

const Home = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const changeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredDate(e.target.value);
  };
  const clickHandler = () => {
    const year = enteredDate.slice(0, 4);
    const month = enteredDate.slice(5, 7);
    const date = enteredDate.slice(8);
    // console.log(date, month, year);
    const birthDate = {
      userDate: date,
      userMonth: month,
      userYear: year,
    };
    props.setUserBirthDate(birthDate);
    props.setDisplayHome(false);
  };
  return (
    <div className={styles.home}>
      <div>
        <h2>Welcome to Guruji Astro Horoscope</h2>
        <br />
      </div>
      <div>
        <h4>Please select Date of Birth</h4>
        <input type="date" onChange={changeHandler} />
        <br />
        <br />
        <button onClick={clickHandler}>Get Horoscope Details</button>
      </div>
    </div>
  );
};

export default Home;
