import { useId } from 'react';
import css from './FiltersBar.module.css';

const FiltersBar = () => {
  const languagesId = useId();
  const levelId = useId();
  const priceId = useId();

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <label htmlFor={languagesId} className={css.label}>
            Languages
          </label>

          <select name="language" id={languagesId} className={css.select}>
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="ukrainian">Ukrainian</option>
            <option value="polish">Polish</option>
          </select>
        </li>

        <li className={css.item}>
          <label htmlFor={levelId} className={css.label}>
            Level of knowledge
          </label>

          <select name="level" id={levelId} className={css.select}>
            <option value="a1">A1 Beginner</option>
            <option value="a2">A2 Elementary</option>
            <option value="b1">B1 Intermediate</option>
            <option value="b2">B2 Upper-Intermediate</option>
          </select>
        </li>

        <li className={css.item}>
          <label htmlFor={priceId} className={css.label}>
            Price
          </label>

          <select name="price" id={priceId} className={css.select}>
            <option value="a1">10</option>
            <option value="a2">20</option>
            <option value="b1">30</option>
            <option value="b2">40</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default FiltersBar;
