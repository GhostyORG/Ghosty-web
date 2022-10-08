// Imports
import { BrowserRouter as Router } from "react-router-dom";

// Stylessheets
import "./styles/css/custom/index.min.css";
// import "./styles/css/custom/variables.min.css";
// BootStrap 5.2
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./routes/animatedRoutes";

// main Functional Component which renders everything
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
