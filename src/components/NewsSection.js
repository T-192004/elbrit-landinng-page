import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/NewsSection.css';


const NewsSection = () => (
    <section className="news-section">
        <p>
        Our Blog
        </p>
        <h1>Latest News</h1>
        <ul>
            <li>
                <div className="news-item" >
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604137/blog1-450x580.jpg_hbh4vj.png" alt="News 1" />
                    <p>The Covid-19 Epidemic in 2022 Is Back</p>
                </div>
                <div className="news-item" style={{height: "190px"}}>
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604701/blog2-450x580.jpg_ppneom.png" alt="News 2" />
                    <p>The Covid-19 Epidemic in 2023 Is Back</p>
                </div>
            </li>
            <li>
                <div className="news-item" style={{height: "190px"}}>
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604137/blog1-450x580.jpg_hbh4vj.png" alt="News 1" />
                    <p>The Covid-19 Epidemic in 2022 Is Back</p>
                </div>
                <div className="news-item">
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604701/blog2-450x580.jpg_ppneom.png" alt="News 2" />
                    <p>The Covid-19 Epidemic in 2023 Is Back</p>
                </div>
            </li>
            <li>
                <div className="news-item">
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604137/blog1-450x580.jpg_hbh4vj.png" alt="News 1" />
                    <p>The Covid-19 Epidemic in 2022 Is Back</p>
                </div>
                <div className="news-item" style={{height: "190px"}}>
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604701/blog2-450x580.jpg_ppneom.png" alt="News 2" />
                    <p>The Covid-19 Epidemic in 2023 Is Back</p>
                </div>
            </li>
            <li>
                <div className="news-item" style={{height: "190px"}}>
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604137/blog1-450x580.jpg_hbh4vj.png" alt="News 1" />
                    <p>The Covid-19 Epidemic in 2022 Is Back</p>
                </div>
                <div className="news-item" >
                    <span className="date">20 APR</span>
                    <LazyLoadImage src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1732604701/blog2-450x580.jpg_ppneom.png" alt="News 2" />
                    <p>The Covid-19 Epidemic in 2023 Is Back</p>
                </div>
            </li>
        </ul>
    </section>
);

export default NewsSection;
