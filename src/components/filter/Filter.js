import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filteredItems, filterContacts }) => {
 return (
  <div className={styles.mainContainer}>
   <div className={styles.inputContainer}>
    <label className={styles.labelName} htmlFor="filter">
     Find contact by name
    </label>
    <input
     onChange={filterContacts}
     type="text"
     name="filter"
     id="filter"
     className={styles.inputName}
    ></input>
   </div>
  </div>
 );
};

export default Filter;
