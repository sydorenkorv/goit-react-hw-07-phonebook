import css from './Filter.module.css';

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
