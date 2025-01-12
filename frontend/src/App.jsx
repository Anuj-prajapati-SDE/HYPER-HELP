import "./App.css";
import './variable.css'
import { Home } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Loader from '../src/components/Loader/Loader'
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>

  );

}

