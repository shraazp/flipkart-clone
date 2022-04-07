/* eslint-disable react/prop-types */
/**
 * Dropdon function for login and more components
 * @author:Shravya P
 */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import './dropDown.scss';
import { removeUserSession } from '../../utils/Common';
import { loginStatus } from '../../actions/categoryActions';

export default function DropDown({ menu, menus, firstMenu }) {
  const logout = (item) => {
    if (item === 'Logout') {
      removeUserSession();
      useDispatch(loginStatus(false));
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
                  <li onClick={() => { logout(item.label); }} key={item.label}>
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
