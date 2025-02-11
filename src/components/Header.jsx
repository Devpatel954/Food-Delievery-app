import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your tasty food here</h2>
            <p>
            Savor the flavors of your favorite dishes, delivered fresh to your doorstep. Indulge in a seamless dining experience with every bite, where convenience meets culinary delight. Your cravings, our priority—delivered with care, speed, and perfection.
            </p>
            <button className='btnn'>View Menu</button>
        </div>
    </div>
  );
}

export default Header;
