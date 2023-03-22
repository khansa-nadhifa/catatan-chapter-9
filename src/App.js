// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Hitungan from './pages/Hitungan';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound';
import CreateUser from './pages/CreateUser';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import LearnClass from './pages/LearnClass';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/create-user" element={<CreateUser/>}/>
        <Route exact path="/allproducts" element={<AllProducts/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/learnclass" element={<LearnClass/>}/>
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <Home/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Hitungan/>
    //   </header>
    // </div>
  );
}

export default App;
