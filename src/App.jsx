import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import MovieCard from "./Components/MovieCard/Moviecard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Moviecard />
    </>
  );
}

export default App;
