import css from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';
import ColorComponent from '../../components/ColorComponent/ColorComponent.jsx';

const HomePage = () => {
  return (
    <main className={css.main}>
      <div className={css.heroContainer}>
        <HeroSection />
        <ColorComponent />
      </div>
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
