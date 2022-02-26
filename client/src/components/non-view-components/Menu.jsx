import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Menu.css';

import { ReactComponent as MenuIcon } from '../media/menu.svg';

export default function Menu({ isLoggedIn }) {
    const [dropdownClass, setDropdownClass] = useState('dropdown-inactive');
    const [isActive, setIsActive] = useState(false);

    const unfoldMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            setDropdownClass('dropdown-active');
        }
        if (isActive === false) {
            setDropdownClass('dropdown-inactive');
        }
    }, [isActive]);

    return (
        <div id="menu" onClick={unfoldMenu}>
            <MenuIcon />
            {isLoggedIn ? (
                <div id="dropdown" className={dropdownClass}>
                    <div id="menu-list">
                        <ul>
                            <li>
                                <NavLink className="link" to="/profile">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/preferences">Preferences</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/integrations">Integrations</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/settings">Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div id="dropdown" className={dropdownClass}>
                    <div id="menu-list">
                        <ul>
                            <li>Billing</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
