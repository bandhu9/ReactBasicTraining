import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';
// import React, { useRef } from 'react';

const MyComponent = (props, ref) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    fetchData: async (url) => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    getData: () => data || [],
    isLoading: () => loading,
  }));
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.author}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const MyComponentRef = forwardRef(MyComponent);

function App() {
  const myComponentRef = React.createRef();

  const handleFetchData = async () => {
    myComponentRef.current.fetchData('https://picsum.photos/v2/list');
  };

  return (
    <div>
      <MyComponentRef ref={myComponentRef} />
      <button onClick={handleFetchData}>Fetch Data</button>
      <p>Data: {myComponentRef.current ? myComponentRef.current.getData() : ''}</p>
      <p>Loading: {myComponentRef.current ? myComponentRef.current.isLoading() : ''}</p>
    </div>
  );
}


const UseImperativeHandle = App;

export default UseImperativeHandle;

