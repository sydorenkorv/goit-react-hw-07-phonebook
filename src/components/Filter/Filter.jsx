import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../redux/contactSlice';

export const Filter = ({ filter, onChange }) => (
  <div className={css.filter}>
    <input
      className={css.filter__input}
      type="text"
      value={filter}
      onChange={onChange}
    />
  </div>
);
