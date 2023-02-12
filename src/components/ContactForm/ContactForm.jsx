import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const contactObj = (name, number) => {
    return {
      id: nanoid(),
      name,
      number,
    };
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = contactObj(name, number);
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.form__title}>Phonebook</h2>
      <div className={css.form__container}>
        <p className={css.form__label}>name: </p>
        <input
          className={css.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name  may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p className={css.form__label}>phone: </p>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button className={css.form__btn} type="submit">
          add
        </button>
      </div>
    </form>
  );
};
