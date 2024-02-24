import React, { useState, useEffect } from 'react';
import MenuApp from './MenuApp';
import './Mainscreen.css';

const Mainscreen = () => {
    const [selectedOption, setSelectedOption] = useState('.');
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://beyogluogretmenevimenus-d65649fd1a23.herokuapp.com/api/menuler');
                const data = await response.json();
                console.log(data)
                // Assuming the response is an array of menu items
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data only once on component mount

    const renderContent = () => {
        // Find the selected option in the fetched menu data
        const selectedMenuItem = menuData.find((item) => item.ad === selectedOption);

        if (selectedMenuItem) {
            return <MenuApp name={  selectedMenuItem.ad} content={selectedMenuItem.icerik} />;
        }

        return null;
    };

    const handleButtonClick = (option) => {
        setSelectedOption(option === selectedOption ? '.' : option);
        setButtonsVisible(false);
    };

    const handleGoBack = () => {
        setSelectedOption('.');
        setButtonsVisible(true);
    };
    const handleClick = () => {
        // Yeni bir pencerede veya sekmede a�mak i�in '_blank' �zelli�i ekleyebilirsiniz
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScLeyd3cFOOCkfZDgG-GMOO_pSEh22Q4qW9TIUdp38xly0H5g/viewform', '_blank');
    };

    return (
        <div className="mainscreen-container">
            {selectedOption !== '.' && (
                <button className="go-back-button" onClick={handleGoBack}>
                    Go Back
                </button>
            )}

            <div className={`button-grid ${buttonsVisible ? 'visible' : 'hidden'}`}>
                {menuData.map((item) => (
                    <div
                        key={item.id}
                        className={`button ${selectedOption === item.ad ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(item.ad)}
                    >
                        {item.ad} {/* Display the option in the button */}
                    </div>
                ))}
                <button onClick={handleClick}>memnuniyet anketimiz</button>

            </div>

            {renderContent()}
        </div>
    );
};

export default Mainscreen;
