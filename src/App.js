import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </>
        }></Route>
        <Route path='/about' element={
          <>
            <Header />
            <About />
          </>
        }></Route>
        <Route path='/services' element={
          <>
            <Header />
            <Services />
          </>
        }></Route>
        <Route path='/portfolio' element={
          <>
            <Header />
            <Portfolio />
          </>
        }></Route>
        <Route path='/contact' element={
          <>
            <Header />
            <Contact />
          </>
        }></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
