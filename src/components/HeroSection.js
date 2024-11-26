import React from 'react';
import '../styles/HeroSection.css';


const featureList = [
    {name: 'Vitamins', description: 'Increased Vitamins and minerals in your diet', imageUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732620889/Frame-8363.png_1_fjohdh.svg'},
    {name: 'Weight Loss', description: ' Weight Loss Find scientifically proven solutions', imageUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732620889/Frame-8364.png_1_aw1q5p.png'},
    {name: 'Functional Foods', description: 'Functional Foods From protein powers to baby formula', imageUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732620901/Frame-8365.png_vg1hjd.png'}
]

const HeroSection = () => (
    <section className="hero-section">
        <h1>Essential Vitamins</h1>
        <div className='second-section'>
            <div className='left-section'>
                <p>Online Medical Supplies</p>
                <h1>Get Your Vitamins & Minerals</h1>
                <button>Explore</button>
            </div>
            <div className='middle-section'>
                <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732615941/2023_15_42_43_GMT_3_tm3zef.png" alt="meds bottle" />
            </div>
            <div className='right-section'>
                <ul>
                    {featureList.map(feat => (
                        <li >
                            <img src={feat.imageUrl} alt={feat.name} />
                            <div>
                                <h2>{feat.name}</h2>
                                <p>{feat.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='third-section'>
            <div></div>
            <div></div>
        </div>
    </section>
);

export default HeroSection;
