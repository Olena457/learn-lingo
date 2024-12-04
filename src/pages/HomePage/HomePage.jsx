import css from "./HomePage.module.css";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import heroLarge from "/icons/hero-large.png";
import FeaturesDisplay from "./../../components/FeaturesDisplay/FeaturesDisplay.jsx";

const HomePage = () => {
    return (
        <main className="css.main">
            <div className={css.heroContainer}>
                <HeroSection />
                <img
                    src={heroLarge}
                    alt="User photo with laptop"
                    className={css.photo}
                />
            </div>
            <FeaturesDisplay />
        </main>
    );
};

export default HomePage;
// future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
