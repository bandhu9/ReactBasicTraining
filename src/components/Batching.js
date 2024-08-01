import React, { useState, useTransition } from 'react';
    

const Batching = () => {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(false);

  const handleClick =()=>{
    fetch('https://picsum.photos/v2/list').then((data) => {
      setTimeout(() => {
        setCount(count => count + 1); // React re-renders this!
        setAlert(alert => !alert); // React re-renders this!    
      }, 1000)
    });
  }
console.log('render count', count, );
console.log('render alert', alert)
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <h1 className={`${alert ? "bg-blue " : "bg-black"}`}>{count}</h1>
    </div>
  );
}

export default Batching;

// const Batching = () => {
//     const [number, setNumber] = useState(0);
  
//     const onIncrementHandler = () => {
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//     }
//     // console.log('Batching Rendering new')
//     return (
//       <>
//         <h1>{number}</h1>
//         <button onClick={onIncrementHandler}>+3</button>
//       </>
//     )

// }

// // const Batching = () => {
// //     const [number, setNumber] = useState(0);
  
// //     const onIncrementHandler = () => {
// //         setNumber(number + 1);
// //         setNumber(number + 1);
// //         setNumber(number + 1);
// //     }
// //     console.log('Batching Rendering new')
// //     return (
// //       <>
// //         <h1>{number}</h1>
// //         <button onClick={onIncrementHandler}>+3</button>
// //       </>
// //     )

// // }
    
// export default Batching;
