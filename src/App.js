import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Project from './components/Project/Project';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/projects" component={Project}/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
