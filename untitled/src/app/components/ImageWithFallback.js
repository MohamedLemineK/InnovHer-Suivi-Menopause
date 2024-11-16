import React from 'react';

function ImageWithFallback({ src, alt, fallbackIcon, className }) {
    const [imgError, setImgError] = React.useState(false);

    return imgError || !src ? (
        <div className={`flex items-center justify-center ${className}`}>
            {fallbackIcon}
        </div>
    ) : (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setImgError(true)}
        />
    );
}

export default ImageWithFallback;
