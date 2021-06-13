import React from "react";
import PropTypes, { object } from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ filteredContacts, handleDelete }) => {
 return (
  <div className={styles.mainContainer}>
   <ul>
    {filteredContacts.map((contact) => (
     <li className={styles.newContact} key={contact.id}>
      <p className={styles.newContactName}>
       {contact.name} : {contact.number}
      </p>
      <button
       type="button"
       className={styles.btn}
       onClick={() => handleDelete(contact.id)}
      >
       Delete
      </button>
     </li>
    ))}
   </ul>
  </div>
 );
};

ContactList.propTypes = {
 filteredContacts: PropTypes.arrayOf(object).isRequired,
 handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
