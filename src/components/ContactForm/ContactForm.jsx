/* eslint-disable default-case */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/action';


export const ContactForm = ({ handleAddContact, contacts }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : handleAddContact({ ...newContact });

    setName('');
    setNumber('');

    dispatch(addContact({ name, number }));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[A-Za-z.'\- ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={changeHandler}
        />
      </label>
      <button className={css.btn}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })),
  deleteContact: PropTypes.func
};

export default ContactForm;


// export const ContactForm = ({ handleAddContact, contacts }) => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const changeHandler = event => {
//     const { name, number } = event.target;
//     switch (name) {
//       case 'name':
//         setName(name);
//         break;
//       case 'number':
//         setNumber(number);
//         break;
//     }
//   };

//   function submitHandler(event) {
//     event.preventDefault();
//     const newContact = {
//       name: name,
//       number: number,
//     };

//     dispatch(addContact(newContact));

//     setName('');
//     setNumber('');
//   }



// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.string,
//   })),
// };

// export default ContactForm;
