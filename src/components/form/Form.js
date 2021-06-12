import React from 'react';
import styles from './Form.module.css';

const Form = () => {
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
     </form>
    );
}

export default Form;