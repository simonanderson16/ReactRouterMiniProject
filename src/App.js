import logo from './logo.svg';
import './App.css';
import AppContainer from './components/AppContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Link} from "react-router-dom";
import Trivia from "./components/Trivia/Trivia.js"
import WeatherApp from "./components/WeatherNews/WeatherApp.js"
import Menu from "./components/Menu/Menu.js"

function App() {
  return (
    <>
    <div className='router'>
    <BrowserRouter>
    <div className="App">
      <h2>React Router Mini Project</h2>
            <h4>By: Simon Anderson</h4>
            <div className="project-links">
            <Link to="/">Home</Link>
            <Link to="weather-news">Weather/News App</Link>
            <Link to="trivia">Trivia App</Link>
            <Link to="menu">Menu App (incomplete)</Link>
            </div>
      <hr></hr>
    </div>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="trivia" element={<Trivia/>} />
        <Route path="/weather-news" element={<WeatherApp/>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
