import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../assets/assets'; 

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className='exploremenu' id='exploremenu'>
      <h1>Explore Our Menu</h1>
      <p className='exploredmenutext'>
      Dive into our diverse menu, where every dish is crafted with passion and flavor. From comforting classics to exciting new tastes, explore the perfect meal for every craving.
      </p>
      <div className="exploredmenulist">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
            className="exploredmenulistitem"
          >
            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;

