import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contactSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [filter, setFilter] = useState('');
  const { data, isFetching } = useGetContactsQuery();

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const isFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    if (data) {
      if (data.length !== 0) {
        return data.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter)
        );
      }
    }
    return;
  };

  return (
    <div>
      <ContactForm />
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList filteredContacts={isFilteredContacts()} />
    </div>
  );
};
