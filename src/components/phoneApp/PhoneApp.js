import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "../sectipon/Section";
import Contacts from "../contacts/Contacts";
import Phonebook from "../phonebook/Phonebook";

class PhoneApp extends Component {
 state = {
  contacts: [
   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],

  name: "",
  number: "",
  filter: "",
 };

 handleInputNameChange = (evt) => {
  this.setState({ [evt.target.name]: evt.target.value });
  console.log("name-ok");
 };

 handleInputNumberChange = (evt) => {
  this.setState({ [evt.target.name]: evt.target.value });
  console.log("number-ok");
 };

 createNewContact = () => {
  // this.setState((prevState) => ({contacts: prevState }));
  console.log("createNewContact-ok");
 };

 handleChange = (evt) => {
  this.setState({ [evt.target.name]: evt.target.value });
  console.log("handleChange-ok");
 };
 render() {
  return (
   <>
    <Section title={"Phonebook"}>
     <Phonebook
      handleInputNameChange={this.handleInputNameChange}
      handleInputNumberChange={this.handleInputNumberChange}
      createNewContact={this.createNewContact}
     />
    </Section>

    <Section title={"Contacts"}>
     <Contacts
      contacts={this.state.contacts}
      handleChange={this.handleChange}
     />
    </Section>
   </>
  );
 }
}
export default PhoneApp;
