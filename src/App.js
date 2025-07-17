import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Comp/LandingPage";
import Equipment from "./Comp/Equipment";
import Nav from "./Comp/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/nav" element={<Nav />}></Route>
          <Route path="/equipment" element={<Equipment />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
