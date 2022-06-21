import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sign-in" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
