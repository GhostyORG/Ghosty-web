// Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Members from "./pages/members";
// Stylessheets
import "./styles/scss/index.scss";
// import "./styles/css/custom/variables.min.css";
// BootStrap 5.2
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/error";

// main Functional Component which renders everything
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
