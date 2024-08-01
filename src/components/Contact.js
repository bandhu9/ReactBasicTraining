import React, { useState , useCallback, useMemo} from 'react';
import useForm from '../hooks/useForm';
import Home from './Home';

const Contact = () =>  {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  const [values, handleChange] = useForm({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(values);
  };

  const handleIncrement = () => {
    console.log('handleIncrement')
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = useCallback(() => {
    console.log('handleDecrement')
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <>
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {data.name && (
        <p>Submitted: {data.name}, {data.email}</p>
      )}
    </div>
    {/* <Home handleIncrement handleDecrement count /> */}
    </>
  );
}

export default Contact;
