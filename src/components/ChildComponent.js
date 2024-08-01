import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Define a functional component using forwardRef to access the ref from parent
const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    // Expose method 'focusInput' to parent component using useImperativeHandle
    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        }
    }));

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
});

export default ChildComponent;
