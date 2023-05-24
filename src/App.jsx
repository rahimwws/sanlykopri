import { createContext, useState } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { Loader } from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { WebPage } from "./pages/WebPage/WebPage";
import { MobilePage } from "./pages/MobilePage/MobilePage";
function App() {
  const [index, setIndex] = useState("0");
  const [dLoader, setLoader] = useState("activeLoader");
  window.onload = () => {
    setLoader("disableLoader");
  };
  return (
    <>
      <Loader name={dLoader} />
      <AppContext.Provider value={{ index, setIndex }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web" element={<WebPage/>} />
          <Route path="/mobile" element={<MobilePage/>} />
        </Routes>
        <Footer/>
      </AppContext.Provider>
    </>
  );
}
export default App;

export const AppContext = createContext();
