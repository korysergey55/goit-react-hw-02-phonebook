import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "../sectipon/Section";
import Contacts from "../contacts/Contacts";
import Phonebook from "../phonebook/Phonebook";

class PhoneApp extends Component {
 state = {
  contacts: [],
  name: "",
  number: "",
 };

 render() {
  return (
   <>
    <Section title={"Phonebook"}>
     <Phonebook />
    </Section>

    <Section title={"Contacts"}>
     <Contacts />
    </Section>
   </>
  );
 }
}
export default PhoneApp;
