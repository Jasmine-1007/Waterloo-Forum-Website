import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './App.css';


import React from 'react'
import Button from './components/Elements/Button';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
     <>
      <Header />
      <main>
        <Outlet /> {/* This renders the current route’s content */}
      </main>
      <Footer /> {/* Optional */}
    </>
  )
}

export default App;


