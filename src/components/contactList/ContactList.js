import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts,  handleDelete }) => {
 return (
  <div className={styles.mainContainer}>
   <ul>
    {contacts.map((contact) => (
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
 contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
 handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
