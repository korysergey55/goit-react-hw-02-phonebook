import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ handleChange }) => {
 return (
  <div className={styles.inputContainer}>
   <label className={styles.labelName}>Find contact by name</label>
   <input
    onChange={handleChange}
    type="text"
    name="filter"
    className={styles.inputName}
   ></input>
  </div>
 );
};

export default Filter;