import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  return function WithLogger(props) {
    useEffect(() => {
      console.log('Component is mounted');
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
