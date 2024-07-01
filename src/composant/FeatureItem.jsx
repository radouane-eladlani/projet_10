import React from 'react';
import './../css/main.css';

const FeatureItem = ({icon,alt,title,p}) => {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{p}</p>
          </div>
    )
}

export default FeatureItem