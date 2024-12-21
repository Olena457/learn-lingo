import sprite from '../../sprite/sprite.svg';

const Icon = ({
  id,
  width,
  height,
  className = '',
  fillColor,
  ariaHidden = true,
  ...props
}) => {
  return (
    <svg
      className={`${className}`}
      style={{ background: 'transparent' }}
      width={width}
      height={height}
      aria-hidden={ariaHidden}
      {...props}
    >
      <use style={{ fill: `${fillColor}` }} href={`${sprite}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
