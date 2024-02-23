import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';

const MenuApp = ({ name, content }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const jsonObject = JSON.parse(content);
        var array = [];
        for (var a = 0; a < jsonObject.length; a++){
            let object = {};
            object.name = jsonObject[a][1];
            object.description = jsonObject[a][2];
            object.price = jsonObject[a][3];
            object.img = "";
            
            array.push(object)
        }
        
       setMenuItems(array)
    }, [content]);

    return (
        <div className="menu-app">
            <h1>{name}</h1>
            <MenuList menuItems={menuItems} />
        </div>
    );
};

export default MenuApp;
