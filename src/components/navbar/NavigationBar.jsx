/**
 * Navigation bar contains different categories of the application
 * @author:Shravya P
 */
import React, { useState } from 'react';
import './Navigation.scss';
import { navData, categories } from '../../constants/data';
import Categories from './Categories';

// eslint-disable-next-line react/prop-types
export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const handleHover = (item) => {
    setOpen(true);
    setCategory(item);
  };
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="navbar">
          {navData.map((temp) => (
            <div className="nav-child-wrapper">
              <a href="/category">
                <div className="nav-image-container">
                  <img className="nav-image" src={temp.url} alt={temp.text} />
                </div>
                <div className="nav-menu-container" onMouseEnter={() => { handleHover(temp.category); }} onMouseLeave={() => { setOpen(false); }}>
                  <div className="nav-text">
                    {temp.text}
                  </div>
                  { temp.category && open && category === temp.category ? (
                    <div className="categories-link">
                      <div className="categories" />
                      <Categories cat={categories[category]} />
                    </div>
                  ) : null }
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
