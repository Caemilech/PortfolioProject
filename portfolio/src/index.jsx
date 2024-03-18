import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Home from './Sections/Home/home';
import Error from "./Components/Error/error"
import './index.css';
import "./Components/Border/border.css"

export default function App() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-container-inner">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<Error/> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)