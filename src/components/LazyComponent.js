import React from 'react';

const LazyComponent = () => {
    console.log('LazyComponent')
  return <div>This component is loaded lazily.</div>;
}

export default LazyComponent;
