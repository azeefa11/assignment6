import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Recipes from './Components/Recipes';
import About from './Components/About';
import Contact from './Components/Contact'; // NEW IMPORT
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Recipes />
        <About />
        <Contact /> {/* NEW SECTION ADDED */}
      </main>
      <Footer />
    </div>
  );
}

export default App;