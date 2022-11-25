// Imports
import { BrowserRouter as Router } from "react-router-dom";

// Stylessheets
import "./styles/scss/index.scss";
// import "./styles/css/custom/variables.min.css";
// BootStrap 5.2
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./routes/animatedRoutes";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

// main Functional Component which renders everything
function App() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className={`App ${darkmode ? "darkmode" : ""}`}>
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
