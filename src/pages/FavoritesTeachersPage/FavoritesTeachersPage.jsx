import css from './FavoritesTeachersPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import {
  selectFavorites,
  selectFavoritesLoading,
} from '../../redux/favorites/selectorsFavorites.js';
import Loader from '../../components/Loader/Loader.jsx';
import { useEffect } from 'react';
import { fetchFavorites } from '../../redux/favorites/operationsFavorites.js';
const FavoritesTeachersPage = () => {
  const favoriteTeachers = useSelector(selectFavorites);
  const isLoading = useSelector(selectFavoritesLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <main className={css.main}>
      <FiltersBar />
      {isLoading && <Loader />}
      {favoriteTeachers.length > 0 ? (
        <TeachersList teachers={favoriteTeachers} />
      ) : (
        <p>No favorites teachers yet.</p>
      )}
    </main>
  );
};

export default FavoritesTeachersPage;
