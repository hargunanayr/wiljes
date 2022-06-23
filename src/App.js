import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sign-in" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
