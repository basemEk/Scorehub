import React from 'react';
import blueCircleSpace from '../../assets/blue-circle-space.svg';
import blueTriangleSpace from '../../assets/blue-triangle-space.svg';
import greenCircleSpace from '../../assets/green-circle-space.svg';
import orangeCircleSmallSpace from '../../assets/orange-circle-small-space.svg';
import orangeCircleSpace from '../../assets/orange-circle-space.svg';
import orangeXSmallSpace from '../../assets/orange-x-small-space.svg';
import orangeXSpace from '../../assets/orange-x-space.svg';
import squareSpace from '../../assets/square-space.svg';
import whiteSpace from '../../assets/white-space.svg';
import whiteSpace2 from '../../assets/white-space-2.svg';
import yellowRoundSpace from '../../assets/yellow-round-space.svg';
import yellowTriangleSmallSpace from '../../assets/yellow-triangle-small-space.svg';
import yellowTriangleSpace from '../../assets/yellow-triangle-space.svg';


const ScatteredItems = () => {
    const scatteredImages = [blueCircleSpace, blueTriangleSpace, greenCircleSpace, orangeCircleSmallSpace, orangeCircleSpace, orangeXSmallSpace, orangeXSpace, squareSpace, whiteSpace, whiteSpace2, yellowRoundSpace, yellowTriangleSmallSpace, yellowTriangleSpace];
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -100
      }}>
        {Array.from({ length: 35 }, (_, i) => {
          const randomImage = scatteredImages[Math.floor(Math.random() * scatteredImages.length)];
          return (
            <img key={i} src={randomImage} alt="star" style={{
              position: 'absolute',
              top: `${Math.floor(Math.random() * 100)}%`,
              left: `${Math.floor(Math.random() * 100)}%`,
              width: `${Math.floor(Math.random() * 20) + 10}px`,
              opacity: Math.random()
            }} />
          );
        })}
      </div>
    );
  };
  
  export default ScatteredItems;