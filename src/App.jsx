import "./App.css";
import Login from "./pages/login";
import Genre from "./pages/genre";
import Weather from "./pages/Weather";
import Browse from "./pages/Browse";

import { Toaster } from "react-hot-toast";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
