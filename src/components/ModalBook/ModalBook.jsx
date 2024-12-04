import css from './ModalBook.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { bookTeacher } from '../../redux/teachers/operationsTeachers.js';
import { toast } from 'react-toastify';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegExp = /^\+?[\d\s-]{7,15}$/;

const bookSchema = yup.object({
  question: yup.string().required('Please select an option!'),
  fullname: yup.string().required('Name is required!'),
  email: yup
    .string()
    .required('Email is requred!')
    .matches(emailRegExp, 'Email is not valid.')
    .email('Email is not valid.'),
  phoneNumber: yup
    .string()
    .required('Phone number is required!')
    .matches(
      phoneNumberRegExp,
      'Phone number must follow the format +XX XXXXX XXXXX. May contain hyphens and spaces. ',
    ),
});

const ModalBook = ({ modalClose, teacher }) => {
  const dispatch = useDispatch();

  const fullnameId = useId();
  const emailId = useId();
  const phoneNumberId = useId();
  const careerId = useId();
  const lessonId = useId();
  const abroadId = useId();
  const examsId = useId();
  const cultureId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookSchema),
    defaultValues: {
      fullname: '',
      email: '',
      phoneNumber: '',
      question: '',
    },
  });

  const onSubmit = data => {
    dispatch(bookTeacher({ ...data, teacherID: teacher.id }))
      .unwrap()
      .then(() =>
        toast.success('Booking request sent!', {
          position: 'top-center',
        }),
      )
      .catch(() => {
        toast.error('Error. Try again later.', {
          position: 'top-center',
        });
      })
      .finally(() => {
        reset();
        modalClose();
      });
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book trial lesson</h3>
      <p className={css.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={css.imageWrapper}>
        <img
          src={teacher['avatar_url']}
          alt={`${teacher.name} ${teacher.surname}`}
          className={css.image}
        />
        <div className={css.imageTextWrapper}>
          <h6 className={css.imageTitle}>Your teacher</h6>
          <p
            className={css.imageText}
          >{`${teacher.name} ${teacher.surname}`}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.fieldsetWrapper}>
          <fieldset className={css.fieldset}>
            <legend className={css.legend}>
              What is your main reason for learning English?
            </legend>

            <div className={css.radioWrapper}>
              <div className={css.inputWrapper}>
                <input
                  {...register('question')}
                  type="radio"
                  value="career"
                  id={careerId}
                  className={css.radio}
                />
                <label htmlFor={careerId} className={css.label}>
                  Career and business
                </label>
              </div>

              <div className={css.inputWrapper}>
                <input
                  {...register('question')}
                  type="radio"
                  value="lesson"
                  id={lessonId}
                  className={css.radio}
                />
                <label htmlFor={lessonId} className={css.label}>
                  Lesson for kids{' '}
                </label>
              </div>

              <div className={css.inputWrapper}>
                <input
                  {...register('question')}
                  type="radio"
                  value="abroad"
                  id={abroadId}
                  className={css.radio}
                />
                <label htmlFor={abroadId} className={css.label}>
                  Living abroad{' '}
                </label>
              </div>

              <div className={css.inputWrapper}>
                <input
                  {...register('question')}
                  type="radio"
                  value="exams"
                  id={examsId}
                  className={css.radio}
                />
                <label htmlFor={examsId} className={css.label}>
                  Exams and coursework{' '}
                </label>
              </div>

              <div className={css.inputWrapper}>
                <input
                  {...register('question')}
                  type="radio"
                  value="culture"
                  id={cultureId}
                  className={css.radio}
                />
                <label htmlFor={cultureId} className={css.label}>
                  Culture, travel or hobby{' '}
                </label>
              </div>
            </div>
          </fieldset>

          <p className={css.errorText}>{errors.question?.message}</p>
        </div>

        <div className={css.userInfo}>
          <div className={css.nameWrapper}>
            <input
              id={fullnameId}
              {...register('fullname')}
              className={css.input}
              placeholder="Full name"
            />
            <p className={css.errorText}>{errors.fullname?.message}</p>
          </div>

          <div className={css.emailWrapper}>
            <input
              id={emailId}
              {...register('email')}
              className={css.input}
              placeholder="Email"
            />
            <p className={css.errorText}>{errors.email?.message}</p>
          </div>

          <div className={css.dateWrapper}>
            <input
              id={phoneNumberId}
              {...register('phoneNumber')}
              className={css.input}
              placeholder="Phone number"
            />
            <p className={css.errorText}>{errors.phoneNumber?.message}</p>
          </div>
        </div>

        <button type="submit" className={css.buttonSubmit}>
          Book
        </button>
      </form>
    </div>
  );
};

export default ModalBook;
