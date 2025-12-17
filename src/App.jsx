import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage.jsx";
import BookingPage from "./Components/BookingPage.jsx";
import Nav from "./Components/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;

