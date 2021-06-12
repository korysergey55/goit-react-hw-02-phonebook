import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";

import Contacts from '../contacts/Contacts';
import Form from '../form/Form';

class Phonebook extends Component {
 state = {
  contacts: [],
  name: "",
 };


 render() {
  return (
   <>
    <Contacts/>
    <Form/>
   </>
  );
 }
};
export default Phonebook;
