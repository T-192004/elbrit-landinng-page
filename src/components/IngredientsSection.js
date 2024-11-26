import React from 'react';
import IngredientCard from './IngredientCard.js';
import '../styles/IngredientsSection.css';


const ingredients = [
    { name: 'Vitamin C', description: 'Boosts immunity', image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732607115/h2-b1.jpg_epkjim.png' },
    { name: 'Vitamin B3', description: 'For healthy skin', image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732607088/bn2-2.jpg_g5mimg.png' },
    { name: 'Magnesium', description: 'Supports energy', image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732607036/bn2-3.jpg_vn9elx.png' },
    { name: 'Hyaluronic Acid', description: 'Keeps skin hydrated', image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732607081/bn2-4.jpg_eovzzr.png' },
    {name: 'Lactobacillus', description: 'Invigorate your gut microbiome', image: 'https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732606926/bn2-5.jpg_htjizw.png'}
];

const IngredientsSection = () => (
    <section className="ingredients-section">
        <div className="intro-section">
            <h4>INGREDIENTS</h4>
            <h1>
                Better Ingredients
            </h1>
            <p>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
        </div>

        {ingredients.map((ingredient, index) => (
            <IngredientCard ingredient={ingredient} index={index} />
        ))}  
        <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732614537/h2-b4.jpg_uxk4ra.png" alt="shapes" className='shape-img' />
            
    </section>
);

export default IngredientsSection;
