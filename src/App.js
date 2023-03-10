import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  const [activePage, setActivePage] = useState('introduction')

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Home />
    </div>
  );
}

export default App;
