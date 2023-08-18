import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, setFilter } from 'redux/action';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter)
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contactData => {
    const id = nanoid();
    const newContact = { id, ...contactData };
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleFilteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
    setContacts(prev => {
      const contactListAfterDelete = prev.filter(contact => contact.id !== id);
      return contactListAfterDelete;
    });
  };

  const filteredContacts = handleFilteredContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        handleAddContact={handleAddContact}
        contacts={contacts}
      ></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilter}></Filter>
      <ContactList
        deleteContact={handleDelete}
        contacts={filteredContacts}
      />
    </div>
  );
};
