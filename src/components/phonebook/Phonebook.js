import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from "prop-types";

const Phonebook = () => {
 return (
  <form className={styles.mainForm}>
   <div className={styles.inputContainer}>
    <label className={styles.labelName}>Name</label>
    <input
     type="text"
     name="name"
     className={styles.inputName}
     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
     required
     placeholder="Enter Name"
    ></input>
   </div>
   <button type="button" className={styles.buttonAddContact}>
    Add contact
   </button>
   <div className={styles.inputContainer}>
    <label className={styles.labelName}>Number</label>
    <input
     type="tel"
     name="number"
     className={styles.inputName}
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
     required
    />
   </div>
  </form>
 );
};

export default Phonebook;