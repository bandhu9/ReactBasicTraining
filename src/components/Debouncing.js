import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  // Define the debounced function
  const fetchData = useCallback(
    debounce((data) => {
      console.log('Fetching data for:', data);
      // Perform the search operation, e.g., fetch data from API
    }, 1000), // Debounce delay of 500ms
    []
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    fetchData(value); // Call the debounced function
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchComponent;
