import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Sign-up";
import TripDetails from "./components/tripDetails";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import ShowAdmin from "./components/ShowAdmin"
import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/signup/:id"
    element={<Signup />}
  />

  <Route
    path="/trip/:id"
    element={<TripDetails />}
  />

  <Route
    path="/contact"
    element={<Contact />}
  />

  <Route
    path="/admin"
    element={<Admin />}
  />

  <Route
    path="/ShowAdmin"
    element={<ShowAdmin />}
  />

</Routes>

    </BrowserRouter>
  );
};

export default App;