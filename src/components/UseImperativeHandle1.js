
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const UseImperativeHandleComponent = () => {
    const childRef = useRef(null);

    const handleClick = () => {
        // Access the child component's focusInput method through ref
        childRef.current.focusInput();
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <button onClick={handleClick}>Send Focus Input from Parent to Child Component</button>
            <ChildComponent ref={childRef} />
        </div>
    );
};

export default UseImperativeHandleComponent;

//--------------------------------------------------------------------------------








// import { useTransition, useState } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import axios from 'axios';

// export default function UseImperativeHandleComponent() {
//   return (
//     <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
//       <AddCommentButton />
//     </ErrorBoundary>
//   );
// }



// function AddCommentButton() {
//   const [pending, startTransition] = useTransition();
//   const [data, setData] = useState([]);

//   const addComment = async (comment) => {
//     await new Promise(resolve => setTimeout(resolve, 3000));

//     // For demonstration purposes to show Error Boundary
//     await axios.get('https://picsum.photos/v2/list')
//       .then(response => {
//         setData(response.data);
//         console.log(response.data)
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });

//     if (comment === null) {
//       throw new Error("Example Error: An error thrown to trigger error boundary");
//     }
//     console.log('END---')
//   }
// console.log('pending-->', pending)
//   return (
//     <button
//       disabled={pending}
//       onClick={() => {
//         startTransition(() => {
//           // Intentionally not passing a comment
//           // so error gets thrown
//           addComment('testing');
//         });
//       }}
//     >
//       Add comment
//     </button>
//   );
// }


