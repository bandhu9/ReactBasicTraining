import React from 'react';

const ErrorFallback = () => {
    console.log('Error logged')
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>We're sorry, but an error occurred.</p>
      {/* <button onClick={resetErrorBoundary}>Try Again</button> */}
      <p>Or, you can go back to the <a href="/">home page</a>.</p>
    </div>
  );
}

export default ErrorFallback;
