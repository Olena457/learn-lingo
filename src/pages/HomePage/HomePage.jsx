import css from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';

const HomePage = () => {
  return (
    <main className={css.main}>
      <div className={css.heroContainer}>
        <HeroSection />
        <div className={css.photoContainer}></div>
      </div>
      <FeaturesSection />
    </main>
  );
};

export default HomePage;

//  v7_fetcherPersist: true,
