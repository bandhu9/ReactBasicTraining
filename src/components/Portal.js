// App.js
import React, { useState } from 'react';
import Modal from './Modal';

const Portal = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    return () => {
      console.log('Remove Portal ')
      // Ensure the element exists before attempting to remove it
      // if ( modalRoot.contains(modalElement)) {
      //   console.log('Remove modalElement')
      //   modalRoot.removeChild(modalElement);
      // }
    };
  };
console.log('  showModal-->', showModal)
  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {showModal && (
      <Modal>
        <div className="modal-content">
          <h2>Modal Title</h2>
          <p>Modal content goes here.</p>
          <button onClick={toggleModal}>Close Modal</button>
        </div>
      </Modal>
      )}

    </div>
  );
}

export default Portal;
