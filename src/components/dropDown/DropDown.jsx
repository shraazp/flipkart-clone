import React from 'react';
import PropTypes from 'prop-types';
import './dropDown.scss';

export default function DropDown({ menu, menus, firstMenu }) {
  return (
    <div className="headerDropdownContainer">
      { menu }
      <div className="dropdown">
        <div className="upArrow" />
        {
           firstMenu
        }
        <ul className="headerDropdownMenu">
          {
                menus && menus.map((item) => (
                  <li>
                    <a
                      href={
                            `${
                              item.href
                            }`
                        }
                      className="icons"
                    >
                      {
                            item.icon
                        }
                      {
                            item.label
                        }
                    </a>
                  </li>
                ))
            }
          {' '}
        </ul>
      </div>
    </div>
  );
}
DropDown.propTypes = {
  menu: PropTypes.node,
  menus: PropTypes.node,
  firstMenu: PropTypes.node,
};
DropDown.defaultProps = {
  menu: <span>More</span>,
  menus: { },
  firstMenu: <div />,
};
