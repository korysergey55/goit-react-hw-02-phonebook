import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
    
 static propTypes = {
  submitNewContact: PropTypes.func.isRequired,
  findDuplicate: PropTypes.func.isRequired,
 };

 state = {
  name: "",
  number: "",
 };

 handleInputChange = (evt) => {
  this.setState({
   [evt.target.name]: evt.target.value,
  });
  console.log(this.state);
  console.log("name-ok");
 };

 handleSubmitForm = (evt) => {
  evt.preventDefault();
  this.props.submitNewContact(this.state);
  console.log("createNewContact-ok");
  console.log(this.state);

  this.props.findDuplicate(this.state.name);
  this.resetForm();
 };

 resetForm = () => {
  this.setState({ name: "", number: "", id: "" });
 };

 render() {
  return (
   <>
    <form className={styles.mainForm} onSubmit={this.handleSubmitForm}>
     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Name</label>
      <input
       onChange={this.handleInputChange}
       type="text"
       name="name"
       className={styles.inputName}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
       placeholder="Enter Name"
      ></input>
     </div>

     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Number</label>
      <input
       onChange={this.handleInputChange}
       type="tel"
       name="number"
       className={styles.inputName}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
      />
     </div>
     <button type="submit" className={styles.buttonAddContact}>
      Add contact
     </button>
    </form>
   </>
  );
 }
}
export default ContactForm;
