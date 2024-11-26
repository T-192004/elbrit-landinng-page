import React from 'react';
import '../styles/FeaturesSection.css';

const features = [
    { title: 'Clinically Studied', description: 'All products that we offer have undergone lab and safety tests', iconUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732621019/Group-8111.svg_b30vjw.png' },
    { title: 'Vegetarian Friendly', description: 'We have a wide selection of vegetarian products to meet your needs', iconUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732621019/Group-8110.svg_lpknsn.png' },
    { title: 'Made in India', description: 'Shop local and explore health products made right here in India', iconUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732621061/Group-8117.svg_ududiy.png' },
    { title: 'Free Shipping', description: 'We deliver to your door with no shipping costs on your orders', iconUrl:'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732621048/Group-8114.svg_h4cimj.png' },
    { title: 'No Risk', description: 'We ensure that all products are safe and within their use-by date', iconUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732621067/Group-8115.svg_gvcwnr.png' },
    { title: 'GMO Free', description: 'Natural, no modified products and derivatives for those who need it', iconUrl: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732621376/Group-8116.svg_rk0hsm.png' },
];

const FeaturesSection = () => (
    <section className="features-section">
        {features.map((feature, index) => (
            <div key={index} className="feature-item">
                <div className='icon'>
                    <img src={feature.iconUrl} alt={feature.title} />
                </div>
                <div className='content'>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            </div>
        ))}
    </section>
);

export default FeaturesSection;
