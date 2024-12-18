import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectTeachersError,
  selectTeachersLoading,
} from '../../redux/teachers/selectorsTeachers.js';
import TeacherItem from '../TeacherItem/TeacherItem.jsx';
import css from './TeachersList.module.css';
const PER_PAGE = 4;

const TeachersList = ({ teachers }) => {
  const loading = useSelector(selectTeachersLoading);
  const error = useSelector(selectTeachersError);

  const [page, setPage] = useState(1);
  const [visibleTeachers, setVisibleTeachers] = useState(
    teachers.slice(0, page * PER_PAGE)
  );

  const isVisible = page * PER_PAGE < teachers.length;

  useEffect(() => {
    setVisibleTeachers(teachers.slice(0, page * PER_PAGE));
  }, [teachers, page]);

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && visibleTeachers?.length > 0 && (
        <>
          <ul className={css.list}>
            {visibleTeachers.map(teacher => (
              <TeacherItem key={teacher.id} teacher={teacher} />
            ))}
          </ul>
          {isVisible && (
            <button
              className={css.moreBtn}
              type="button"
              onClick={handleShowMore}
            >
              Load more
            </button>
          )}
        </>
      )}
    </>
  );
};

export default TeachersList;
