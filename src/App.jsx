import { useState } from "react";
import Alert from "./Alert/Alert";
import "./App.css";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
import OurRecipes from "./OurRecipes/OurRecipes";

function App() {
  const [message, setMessage] = useState("");

  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = (giveMessage) => {
    setMessage(giveMessage);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <>
      <Alert showMessage={showMessage} message={message} handleButtonClick={handleButtonClick}></Alert>
      <NavBar></NavBar>
      <Banner></Banner>
      <OurRecipes handleButtonClick={handleButtonClick}></OurRecipes>
    </>
  );
}

export default App;
