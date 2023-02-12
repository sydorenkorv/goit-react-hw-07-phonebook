import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <input
        className={css.filter__input}
        onChange={event => dispatch(filterItems(event.currentTarget.value))}
      />
    </div>
  );
};
