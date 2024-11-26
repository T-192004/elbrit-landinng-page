import React from 'react';
import '../styles/Footer.css';
import ContactCard from './ContactCard'



const contactDetails = [{
        iconImage: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732601743/Component-2.svg_fdmamd.png",
        title: "Phone Number",
        details: "+974 3118 1843",
    },
    {
        iconImage: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732601819/Component-2-1.svg_lerkai.png",
        title: "Email Address",
        details: "Elbrithcqhr@gmail.com",
    },
    {
        iconImage: "https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732601840/Component-2-2.svg_uv5gm7.png",
        title: "Office Location",
        details: " Ambassador Street, Zone 61,",
    }
]
const Footer = () => (
    <footer className="footer">
        <ul className='footer-contacts'>
            {contactDetails.map(cont => <ContactCard cont={cont} />)}
        </ul>
        <div className='footer-bottom'>
            <div>
                <img className='elbrit-logo' src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732601358/elibit-logo_k63ipz.png" />
            </div>
            <p>    
            Your health, physical and emotional well-being is important 
            to us. We are always by your side and have made it even 
            easier for you to find the necessary vitamins.
            </p>
        </div>
        <div className='footer-address'>
            <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732603793/Frame_orvvct.png" alt="location" />
            <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
    </footer>
);

export default Footer;
