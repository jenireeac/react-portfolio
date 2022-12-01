import React from 'react';
import Navbar from './components/Nav';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
