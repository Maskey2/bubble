import React from 'react';
import './App.css';
import Header from './components/Header'
import Appbar from './components/Appbar'
import Content from './components/Content'
import Footer from './components/Footer'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Appbar />
      <Content />
      <About />
      <Footer />
    </div>
  );
}

export default App;
