import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/wiljes" element={<Home />} exact />
        <Route path="/wiljes/sign-in" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
