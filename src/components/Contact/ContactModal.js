// ContactModal.js

import React from 'react';
import classes from './Contact.module.css';
import ContactForm from './ContactForm';

const ContactModal = ({ onClose }) => {
  return (
    <div className={classes.ModalOverlay} onClick={onClose}>
      <div className={classes.ModalContent} onClick={(e) => e.stopPropagation()}>
        <span className={classes.CloseButton} onClick={onClose}>&times;</span>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
