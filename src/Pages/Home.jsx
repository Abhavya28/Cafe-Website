import React from 'react';
import '../assets/css/home.css'; 
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-overlay">
        <div className="home-info">
          <h1>Discover The Art Of Perfect Coffee</h1>
          <p>
            From handpicked beans to the perfect roast, every cup is made to delight your senses. 
            Step in, sip, and feel the art of coffee come alive.
          </p>
          <button className="menu-btn" onClick={() => navigate('/menu')}>
            Order Now
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
