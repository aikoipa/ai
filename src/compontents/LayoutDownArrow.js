import React, { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

function LayoutDownArrow(props) {

  const [width, setWidth] = useState(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    setWidth(windowSize.width / 2);
  }, [windowSize])

  
  return (
    <div 
      className="layout-arrow-down" 
      style={{ 
        borderLeft: `${width}px solid transparent`,
        borderRight: `${width}px solid transparent`,
        borderTop: `50px solid ${props.color}`,
      }} 
    />
  );
}

export default LayoutDownArrow;