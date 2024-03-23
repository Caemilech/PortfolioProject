import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Home from "./Sections/Home/home";
import Error from "./Components/Error/error"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MentionsLegales from "./Sections/Mentions Légales/mentionslegales";
import "./index.css";
import "./Components/Border/border.css"

export default function App() {
  return (
    <div className="main">
      <div className="main-container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mentions-legales' element={<MentionsLegales />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)