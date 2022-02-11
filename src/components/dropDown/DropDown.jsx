/**
 * Dropdon function for login and more components
 * @author:Shravya P
 */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './dropDown.scss';
import { removeUserSession } from '../../utils/Common';
import { loginStatus } from '../../actions/categoryActions';

export default function DropDown({ menu, menus, firstMenu }) {
  const logout = (item) => {
    if (item === 'Logout') {
      removeUserSession();
<<<<<<< HEAD
      useDispatch(loginStatus(false));
=======
      useDispatch(loginStatus());
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
    }
  };
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
                  <li onClick={() => { logout(item.label); }}>
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
                      <div className="icon-label">
                        {
                            item.label
                        }
                      </div>
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
