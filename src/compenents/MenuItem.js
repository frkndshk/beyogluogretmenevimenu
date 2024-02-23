import React, { useState, useEffect } from 'react';
import './styles.css'; 
import OpenDetails from './OpenDetails';

const MenuItem = ({ item }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [imageExists, setImageExists] = useState(true); 

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const shortenedDescription = item.description.length > 30 ? `${item.description.slice(0, 30)}...` : item.description;

    // Dosyan�n var olup olmad���n� kontrol etmek i�in bir yard�mc� fonksiyon
    async function checkImageExists(imageUrl) {
        if (imageUrl === undefined || imageUrl === "" ) {
            return false
        }
        else if (imageUrl == null ) {
            return false
        }
        try {
            const response = await fetch(imageUrl);
            // E�er resim varsa, status 200 olacakt�r
            return response.status === 200;
        } catch (error) {
            // Fetch hatas� durumunda dosya bulunamam��t�r
            return false;
        }
    }

    useEffect(() => {
        const checkAndSetImage = async () => {
            const exists = await checkImageExists(item.img);
            setImageExists(exists);
        };

        checkAndSetImage();
    }, [item.img]);

    return (
        <div className={`menu-item ${showDetails ? 'expanded' : ''}`}>
            {/*imageExists ? (
                <img src={item.img} alt={item.name} />
            ) : (
                <img src={process.env.PUBLIC_URL + '/b.jpg'} alt="Sabit Resim A��klamas�" />
            )*/}
            <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-p">{showDetails ? item.description : shortenedDescription}</p>
                {item.description.length > 30 && (
                    <button onClick={toggleDetails}>{showDetails ? 'K�salt' : 'Detaylar'}</button>
                )}
                <p>Fiyat: {item.price}TL</p>
                {showDetails && <OpenDetails show={toggleDetails} item={item} />}
            </div>
        </div>
    );
};

export default MenuItem;
