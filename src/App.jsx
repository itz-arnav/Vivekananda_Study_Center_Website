import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SignInSignUpForm from "./components/SignInSignUpForm/SignInSignUpForm";
import Course from "./components/Courses/Course";

function App() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignInSignUpForm />} />
          <Route path="/course/:slug" element={<Course />} />
          <Route path="*" element={<div>No route matched</div>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
