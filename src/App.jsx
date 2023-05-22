import { createContext, useState } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
export const AppContext = createContext();

function App() {
  const [index, setIndex] = useState('0');

  return (
    <AppContext.Provider value={{index, setIndex}}>
        <HomePage />
    </AppContext.Provider>
  );
}
export default App;
