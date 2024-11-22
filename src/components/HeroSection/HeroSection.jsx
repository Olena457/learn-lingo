import { NavLink } from 'react-router-dom';
import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>
        Unlock your potential with the best{' '}
        <span className={css.focus}> language</span> tutors
      </h1>
      <p className={css.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <div className={css.wrapperLink}>
        <NavLink to="/teachers" className={css.link}>
          Get started
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
