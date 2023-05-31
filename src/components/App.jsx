import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "redux/contacts/contatctsSlice";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
import { Layout } from "./GlobalStyles.styled";

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.search)
  const contacts = useSelector(state => state.contacts.array)

  useEffect(()=> {
    const contactsArray = JSON.parse(localStorage.getItem('contacts'));
    if (!contactsArray) return;
    dispatch(change(contactsArray));
  },[dispatch])

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])


  const getVisibleContacts=()=>{
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
  )};

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <FilterContacts/>
      <ContactList contacts={getVisibleContacts()}/> 
    </Layout>
  );
}
