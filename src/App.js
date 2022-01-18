import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Home from './pages/home';  
import Premium from './pages/premium';
import Armador from './pages/armador';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/premium' element = {<Premium />} />
        <Route path = '/armar' element = {<Armador />} />
      </Routes>
    </Router>
  );
}

export default App;
