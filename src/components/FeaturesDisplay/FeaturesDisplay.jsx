import css from './FeaturesDisplay.module.css';

const FeaturesDisplay = () => {
  return (
    <section className={css.display}>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.numbers}></p>
          <p className={css.text}></p>
        </li>
        <li className={css.item}>
          <p className={css.numbers}></p>
          <p className={css.text}></p>
        </li>
        <li className={css.item}>
          <p className={css.numbers}></p>
          <p className={css.text}></p>
        </li>
        <li className={css.item}>
          <p className={css.numbers}></p>
          <p className={css.text}></p>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesDisplay;
