import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ThankyouSection from './components/ThankyouSection';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/thank-you" element={<ThankyouSection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
