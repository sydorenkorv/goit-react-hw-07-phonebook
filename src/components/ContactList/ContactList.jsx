import { useDeleteContactMutation } from 'redux/contactSlice';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      <h2 className={css.contacts__title}>Contacts</h2>
      <div className={css.contacts}>
        <ul className={css.contacts__list}>
          {contacts &&
            contacts.map(({ id, name, number }) => (
              <li className={css.contacts__item} key={id}>
                <p className={css.contacts__name}>{name}</p>
                <p className={css.contacts__number}>{number}</p>
                <button
                  className={css.contacts__btn}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
