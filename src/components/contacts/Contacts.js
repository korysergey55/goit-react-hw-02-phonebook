import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import Filter from './filter/Filter';

const Contacts = ({ contacts, handleChange }) => {
 return (
  <div className={styles.mainContainer}>
   <Filter handleChange={handleChange} />
   <ul>
    {contacts.map((contact) => (
     <li className={styles.newContact} key={contact.id}>
      {contact.name} : {contact.number}
     </li>
    ))}
   </ul>
  </div>
 );
};


export default Contacts;