import React from 'react';


// Button is Reusable component
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
