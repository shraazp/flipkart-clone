import React from 'react';
import './categories.scss';
import { fashion } from '../../constants/data';

function Categories() {
  const [category, setCategory] = React.useState(fashion["Mens's Top Wear"]);
  const handleHover = (sub) => {
    setCategory(sub);
  };
  return (
    <div className="main-container">
      <ul className="category-container">
        {Object.keys(fashion).map((key) => (
          <li className="cat" onMouseOver={() => { handleHover(fashion[key]); }} onFocus={() => { handleHover(fashion[key]); }}>
            {key}
          </li>
        ))}
      </ul>
      <ul className="subCategory-container">
        <span className="sub-span">{category[0]}</span>
        {
        category.map((item, index) => (
          (index !== 0) ? <li className="sub-cat">{item}</li> : null
        ))
        }
      </ul>
    </div>
  );
}

export default Categories;
