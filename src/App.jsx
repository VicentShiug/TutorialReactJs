import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div>
      <Router>
        <Link to="/home">Home</Link>--
        <Link to="/hello">Hello</Link>
        <Routes>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
