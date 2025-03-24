import "./App.css";
import Login from "./pages/login";
import Genre from "./pages/genre";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/genre" element={<Genre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
