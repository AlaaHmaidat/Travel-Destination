import Home from "../src/components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
    </div>
  );
}
export default App;
