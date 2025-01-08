import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/home/Home';
import Signin from './views/signin/Signin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
