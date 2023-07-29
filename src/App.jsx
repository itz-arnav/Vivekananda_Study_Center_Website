import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import SignInSignUpForm from "./components/SignInSignUpForm/SignInSignUpForm";

function App() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignInSignUpForm />} />
          <Route path="*" element={<div>No route matched</div>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
