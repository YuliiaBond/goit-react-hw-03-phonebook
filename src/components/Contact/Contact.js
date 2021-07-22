import React from 'react';
import style from './Contact.module.css';

const Contact = ({name, number, onDeleteContact}) => (  
    <>
        <p className={style.name}>
            {name}: <span>{number}</span>
        </p>
        <button className={style.btn} onClick={onDeleteContact}>
            Delete
        </button>
    </>
);

export default Contact;