// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './ModalContent.css';


const Modal = ({ children }) => {
  console.log(' Children0-->', children)
  const modalRoot = document.getElementById('modal-root');

  // Create a new DOM element to render the modal content
  const modalElement = document.createElement('div');

  // Append the new element to the modal-root
  modalRoot.appendChild(modalElement);

  // Clean up the modal element when the component unmounts
  // Task - Remove modalElement from modal root
   
  return ReactDOM.createPortal(
    <div className="modal-content">{children}</div>,
    modalElement
  );
};

export default Modal;
