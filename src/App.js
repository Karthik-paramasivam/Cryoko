import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu';
import Home from "./Pages/Home"
import About from './Pages/Aboutus';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 



function App() {
  return (

  <>
<Router> 
<Menu />
<Routes>

  <Route path="/" element={<Home  />} /> 
  <Route path="/aboutus" element={<About />} /> 
</Routes>
</Router>
</>
  );
}

export default App;
