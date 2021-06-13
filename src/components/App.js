import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Section from "./sectipon/Section";
import ContactList from "./contactList/ContactList";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";

class App extends Component {
 state = {
  contacts: [
   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
 };

 submitNewContact = (data) => {

  const newTodo = {
   name: data.name,
   number: data.number,
   id: uuid(),
  };

  this.setState((prevState) => {
   const newContact = [newTodo, ...prevState.contacts];
   return { contacts: newContact };
  });
 };

 findDuplicate = (newContactName) => {
  const isDublicate = this.state.contacts.some(
   (contact) => contact.name === newContactName
  );
  if (isDublicate) {
   alert("This Name already exist!" + newContactName);
   return;
  }
 };

 filterContacts = (id) => {
    console.log('ok');
//   this.setState((prevState) => ({
//    contacts: prevState.contacts.map((contact) =>
//     contact.id === id ? { contacts: contact } : { contacts: this.state.contacts }
//    ),
//   }));
 };

 handleDelete = (id) => {
  this.setState((prevState) => ({
   contacts: prevState.contacts.filter((contact) => contact.id !== id),
  }));
 };

 render() {
// const formattedFilter = this.state.filter.toLowerCase().trim();
// const filteredItems = this.state.contacts.filter((contact) =>
//  contact.name.toLowerCase().includes(formattedFilter)
// );
  return (
   <>
    <Section title={"Phonebook"}>
     <ContactForm
      submitNewContact={this.submitNewContact}
      findDuplicate={this.findDuplicate}
     />
    </Section>

    <Section title={"Contacts"}>
     <Filter
      filterContacts={this.filterContacts}
      // filteredItems={filteredItems}
     />
     <ContactList
      contacts={this.state.contacts}
      handleDelete={this.handleDelete}
     />
    </Section>
   </>
  );
 }
}
export default App;
