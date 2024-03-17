import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Home from './Sections/Home/home';
import './index.css';
import "./Components/Border/border.css"

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="main-container">
          <div className="main-container-inner">
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)