import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          value={filter}
          onChange={onChange}
          pattern="^[A-Za-z.'\- ]+$"
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
}