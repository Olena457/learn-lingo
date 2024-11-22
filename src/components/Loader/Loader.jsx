import { CircleLoader } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <CircleLoader
      visible={true}
      height="80"
      width="80"
      color="#f4c550"
      ariaLabel="circle-loader-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
