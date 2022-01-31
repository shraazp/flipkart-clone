import React from 'react';
import './dropDown.scss';

export default function DropDown(props) {
  return (
    <div className="headerDropdownContainer">
      { props.menu }
        <div className="dropdown">
            <div className="upArrow"></div>
            {
           props.firstMenu
        }
            <ul className="headerDropdownMenu">
                {
                props.menus && props.menus.map((item, index) => (
                    <li key={index}>

                        <a href={
                            `${
                                item.href
                            }`
                        } className="icons">
                            {
                            item.icon
                        }
                            {
                            item.label
                        } </a>

                    </li>
                ))
            } </ul>
        </div>
    </div>
    );
}
