import "./App.css";
// import Navbar from "./Components/Navbar";
import Pokemon from "./Components/Pokemon";
import Types from "./Components/Types";

import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Favorites from "./Components/Favorites";
import TypeDetails from "./Components/TypeDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon/:name" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/type" element={<Types />} />
        <Route path="/types/:id" element={<TypeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
