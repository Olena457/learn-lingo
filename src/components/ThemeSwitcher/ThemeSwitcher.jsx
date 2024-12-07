import { useTheme } from '../../contexts/useTheme.js';
import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={css['themeSwitcher']}>
      <button
        className={`${css.circle} ${css.blue}`}
        onClick={() => toggleTheme('')}
      ></button>
      <button
        className={`${css.circle} ${css.yellow}`}
        onClick={() => toggleTheme('theme-yellow')}
      ></button>
      <button
        className={`${css.circle} ${css.red}`}
        onClick={() => toggleTheme('theme-red')}
      ></button>
    </div>
  );
};

export default ThemeSwitcher;
