import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Hollywood from './Components/Hollywood';
import Technology from './Components/Technology';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DataProvider } from './Components/AllContext'
import PostDetails from './Components/PostDetails';


function App() {
  return (
    <>
    <DataProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/bollywood" element={<Bollywood/>} />
        <Route path='/PostDetails/:id' element={<PostDetails />}/>
        <Route path="/technology" element={<Technology/>} />
        <Route path="/hollywood" element={<Hollywood/>} />
        <Route path="/fitness" element={<Fitness/>}/>
        <Route path="/food" element={<Food/>} />

      </Routes>
    </Router>
    </DataProvider>
    </>
    
  );
}

export default App;
