import React, { useState, useEffect } from 'react';

const x = '123';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState([]);

  const onPrevHandler = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? prevIndex + imageList.length : prevIndex - 1;
    });
  };
  const onNextHandler = () => {
    // sleep(2)
    setCurrentIndex((prevIndex) => {
      return prevIndex === imageList.length
        ? prevIndex - imageList.length
        : prevIndex + 1;
    });
  };

  const FetchAPI = async () => {
    const response = await fetch('https://picsum.photos/v2/list');
    const result = await response.json();
    console.log(result);
    setImageList(result);
  };

  useEffect(() => {

    FetchAPI();
  }, []);
  return (
    <>
      <button onClick={onPrevHandler}> Prev </button>
      <img
        src={imageList[currentIndex]?.download_url}
        width="200px"
        height="200px"
      />
      <h3>{imageList[currentIndex]?.author}</h3>
      <button onClick={onNextHandler}> Next </button>
    </>
  );
};

export default Carousel;
