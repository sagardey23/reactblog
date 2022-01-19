// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Hollywood from './Components/Hollywood';
import Technology from './Components/Technology';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PostDetails from './Components/PostDetails';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/bollywood" element={<Bollywood/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="/hollywood" element={<Hollywood/>} />
        <Route path="/fitness" element={<Fitness/>}/>
        <Route path="/food" element={<Food/>} />
        <Route path="/post/1" element={<PostDetails/>} />

      </Routes>
    </Router>
    
  );
}

export default App;
