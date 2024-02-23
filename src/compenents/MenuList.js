import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ menuItems }) => {
    return (
        <div className="menu-list">
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );
};

export default MenuList;

