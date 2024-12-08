import css from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={css.display}>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.numbers}>32,000 +</p>
          <p className={css.text}>Experienced tutors</p>
        </li>
        <li className={css.item}>
          <p className={css.numbers}>300,000 +</p>
          <p className={css.text}>5-star tutor reviews</p>
        </li>
        <li className={css.item}>
          <p className={css.numbers}>120 +</p>
          <p className={css.text}>Subjects taught</p>
        </li>
        <li className={css.item}>
          <p className={css.numbers}>200 +</p>
          <p className={css.text}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
