import React, { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Define the throttled function
  const handleScroll = useCallback(
    throttle(() => {
      setScrollPosition(window.scrollY);
      console.log('Scroll Position:', window.scrollY);
      // Perform actions based on scroll position, e.g., load more data
    }, 1000), // Throttle delay of 1000ms
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ height: '2000px' }}>
      Scroll down to see the effect.
      <div>Current Scroll Position: {scrollPosition}px</div>
    </div>
  );
};

export default ScrollComponent;
