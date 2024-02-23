// ImageChecker.js
import React, { useState, useEffect } from 'react';

const ImageChecker = ({ imageUrl, render }) => {
    const [imageExists, setImageExists] = useState(true);

    useEffect(() => {
        const checkAndSetImage = async () => {
            try {
                const response = await fetch(imageUrl);
                const exists = response.status === 200;
                setImageExists(exists);
            } catch (error) {
                setImageExists(false);
            }
        };

        checkAndSetImage();
    }, [imageUrl]);

    return render(imageExists);
};

export default ImageChecker;
