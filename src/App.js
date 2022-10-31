import { useState } from "react";
import Home from "./components/Home";
import Horoscope from "./components/Horoscope";

function App() {
  const [disPlayHome, setDisplayHome] = useState(true);
  const [userBirthDate, setUserBirthDate] = useState("");
  return (
    <>
      {disPlayHome ? (
        <Home
          setDisplayHome={setDisplayHome}
          setUserBirthDate={setUserBirthDate}
        />
      ) : (
        <Horoscope birthDate={userBirthDate} />
      )}
    </>
  );
}
export default App;
