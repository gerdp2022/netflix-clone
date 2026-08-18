import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import DisplayRow from "./Components/DisplayRow/DisplayRow";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
    </>
  );
}

export default App;
