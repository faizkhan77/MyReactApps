import logo from './logo.svg';
import './App.css';
import SignUp from './MyComponents/SignUp';
import './MyComponents/SignUp.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './MyComponents/MyRouter/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/Home" element={<Home />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
