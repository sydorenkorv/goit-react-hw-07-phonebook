import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/contactSlice';
import { getContact, getFilterWord } from '../redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContact);
  const filterWord = useSelector(getFilterWord);

  const addContact = contactObj => {
    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(contactObj.name.toLowerCase())
    );
    findContact
      ? alert(`${contactObj.name} is already in contact`)
      : dispatch(addItem(contactObj));
  };

  const isFilteredContacts = () => {
    if (filterWord) {
      const normalizeFilter = filterWord.toLowerCase();

      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter)
        );
      }
    }
    return contacts;
  };

  return (
    <div>
      <ContactForm onSubmit={addContact} />
      <Filter />
      <ContactList filteredContacts={isFilteredContacts()} />
    </div>
  );
};
