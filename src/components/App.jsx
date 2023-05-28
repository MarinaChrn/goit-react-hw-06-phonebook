import { useEffect } from "react";
import { useState } from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
import { Layout } from "./GlobalStyles.styled";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(()=> {
    const contactsArray = JSON.parse(localStorage.getItem('contacts'));
    if (!contactsArray) return;
    setContacts(contactsArray);
  },[])

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])

  const addContact = (contact) =>{
    let arraysOfName=[];
    contacts.map(element=> (
        arraysOfName.push(element.name) 
    ));
    if (!arraysOfName.includes(contact.name)) {
      setContacts([...contacts, contact])
    } else {
      alert(`${contact.name} is alredy in contacts`)
    }
  }

  const deleteContact=(id) =>{
    setContacts(contacts.filter(contact=> contact.id!==id))
  }

  const searchByName =(name)=> {
    setFilter(name.toLowerCase())
  }

  const getVisibleContacts=()=>{
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
  )};

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <h2>Contacts</h2>
      <FilterContacts searchByName={searchByName}/>
      <ContactList contacts={getVisibleContacts()} deleteContact={deleteContact}/> 
    </Layout>
  );
}
