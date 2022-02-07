/**
 * different categories in the navigation bar
 * @author:Shravya P
 */
import React from 'react';
import './categories.scss';

// eslint-disable-next-line react/prop-types
function Categories({ cat }) {
  const [category, setCategory] = React.useState(Object.values(cat)[0]);
  const handleHover = (sub) => {
    setCategory(sub);
  };
  return (
    <div className="main-container">
      <ul className="category-container">
        {Object.keys(cat).map((key) => (
          <li className="cat" onMouseOver={() => { handleHover(cat[key]); }} onFocus={() => { handleHover(cat[key]); }}>
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
