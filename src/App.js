import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import IngredientsSection from './components/IngredientsSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import './App.css';

const App = () => (
    <div className="app">
        <header className="header">
            <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732601358/elibit-logo_k63ipz.png" alt="Elbrit Logo" className="logo" />
        </header>
        <HeroSection />
        <FeaturesSection />
        <IngredientsSection />
        <NewsSection />
        <Footer />
    </div>
);

export default App;
