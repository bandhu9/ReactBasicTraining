import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageData() {
  const [data, setData] = useState([]);

  // Q. Difference b/w axios and fetch
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      return 
  }, []);
// 
  // Q. Why we need to use key
  return (
    <div>
      <h2>Image Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default ImageData;
