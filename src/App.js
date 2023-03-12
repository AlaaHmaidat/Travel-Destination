import Home from "../src/components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      
        <Home path="/" element={<Home />} />
   
    </div>
  );
}

export default App;
