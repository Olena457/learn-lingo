// варіант 3 модальні виправлення
// import { useState, lazy, Suspense } from 'react';
import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import css from './TeacherItem.module.css';
import book from '../../icons/book.svg';
import defaultAvatar from '../../icons/user.svg';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { selectFavoritesIds } from '../../redux/favorites/selectorsFavorites.js';
import { toggleFavorite } from '../../redux/favorites/operationsFavorites.js';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import ModalBook from '../ModalBook/ModalBook.jsx';
// const ModalWindow = lazy(() => import('../ModalWindow/ModalWindow.jsx'));
// const ModalBook = lazy(() => import('../ModalBook/ModalBook.jsx'));

const TeacherItem = ({ teacher }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isExpanded, setIsExpanded] = useState(false);
  const favoriteIndexes = useSelector(selectFavoritesIds);

  const [isLiked, setLiked] = useState(favoriteIndexes.includes(teacher.id));
  const [isModalOpen, setIsModalOpen] = useState(null); // Використання одного стану для керування модальними вікнами

  const dispatch = useDispatch();

  const handleBookOpen = () => {
    setIsExpanded(false);
    setIsModalOpen('book');
  };
  const handleModalClose = () => setIsModalOpen(null);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const handleLike = () => {
    if (!isLoggedIn) {
      toast.info('Login first to save favorites!', {
        position: 'top-center',
      });
    } else {
      setLiked(!isLiked);
      dispatch(toggleFavorite(teacher.id));
    }
  };

  return (
    <li className={css.item}>
      <div className={css.circle}>
        <img
          src={teacher['avatar_url']}
          alt={`${teacher.name} ${teacher.surname}`}
          className={css.avatar}
        />

        <Icon
          id="online"
          width={12}
          height={12}
          className={css.onlineIcon}
          fillColor="#38cd3e"
          ariaHidden={true}
        />
      </div>

      <section className={css.container}>
        <div className={css.mainInfoWrapper}>
          <div className={css.nameWrapper}>
            <p className={css.languagesText}>Languages</p>
            <h4 className={css.name}>{`${teacher.name} ${teacher.surname}`}</h4>
          </div>

          <div className={css.lessonsWrapper}>
            <div className={css.lessonsInfo}>
              <div className={css.lessonsOnlineWrapper}>
                <img src={book} alt="Book" className={css.bookImg} />
                <p className={css.lessonsText}>Lessons online</p>
              </div>

              <p className={css.lessonsText}>
                {`Lessons done: ${teacher['lessons_done']}`}
              </p>

              <div className={css.ratingWrapper}>
                <Icon
                  id="star"
                  width={16}
                  height={16}
                  className={css.starIcon}
                  fillColor="#ffc531"
                  ariaHidden={true}
                />
                <p className={css.lessonsText}>{`Rating: 4.8`}</p>
              </div>

              <p className={css.lessonsText}>
                Price / 1 hour:{' '}
                <span className={css.price}>{teacher['price_per_hour']}$</span>
              </p>
            </div>
            <button type="button" onClick={handleLike}>
              {isLiked ? (
                <Icon
                  id="heart-full"
                  width={26}
                  height={26}
                  className={css.heartIcon}
                  fillColor="#f00b0b"
                  ariaHidden={false}
                />
              ) : (
                <Icon
                  id="heart-transparent"
                  width={26}
                  height={26}
                  className={css.heartIcon}
                  fillColor="#121417"
                  ariaHidden={false}
                />
              )}
            </button>
          </div>
        </div>

        <div className={css.teacherInfo}>
          <p className={css.criterion}>
            Speaks:{' '}
            <span className={css.criterionLang}>{teacher.languages}</span>
          </p>

          <p className={css.criterion}>
            Lesson Info:{' '}
            <span className={css.criterionText}>{teacher['lesson_info']}</span>
          </p>

          <p className={css.criterion}>
            Conditions:{' '}
            <span className={css.criterionText}>{teacher.conditions}</span>
          </p>
        </div>

        {!isExpanded && (
          <button
            type="button"
            onClick={toggleReadMore}
            className={css.readMoreBtn}
          >
            Read more
          </button>
        )}

        {isExpanded && (
          <div className="more-info">
            <p className={css.experienceText}>{teacher.experience}</p>

            <ul className={css.reviewsList}>
              {teacher.reviews.map((review, id) => (
                <li key={id} className={css.reviewItem}>
                  <div className={css.iconReviewWrapper}>
                    <img
                      src={defaultAvatar}
                      alt="avatar"
                      className={css.reviewAvatar}
                    />
                    <div className={css.iconReviewNameWrapper}>
                      <p className={css.reviewName}>
                        {review['reviewer_name']}
                      </p>
                      <div className={css.reviewStarWrapper}>
                        <Icon
                          id="star"
                          width={16}
                          height={16}
                          className={css.starIcon}
                          fillColor="#ffc531"
                        />
                        {parseInt(review['reviewer_rating']).toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <p className={css.reviewText}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className={css.levelsList}>
          {' '}
          {typeof teacher.levels === 'string' ? (
            teacher.levels.split(',').map((level, id) => (
              <li key={id} className={css.levelsItem}>
                {' '}
                #{level.trim()}{' '}
              </li>
            ))
          ) : (
            <li className={css.levelsItem}>No levels specified</li>
          )}{' '}
        </ul>

        {isExpanded && (
          <button
            type="button"
            className={css.bookBtn}
            onClick={handleBookOpen}
          >
            Book trial lesson
          </button>
        )}

        {isModalOpen === 'book' && (
          <ModalWindow
            onCloseModal={handleModalClose}
            modalIsOpen={isModalOpen === 'book'}
          >
            <ModalBook modalClose={handleModalClose} teacher={teacher} />
          </ModalWindow>
        )}
      </section>
    </li>
  );
};

export default TeacherItem;
