import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './SignUp.module.css';
import { useId, useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import eyeIcon from '/icons/eye.svg';
import { toast } from 'react-toastify';
// import { registerUser } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operationsAuth.js';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 7;
const maxPasswordLength = 22;

const signUpSchema = yup.object({
  name: yup.string().required('Name is required'),

  email: yup
    .string()
    .required('Email is required!')
    .matches(emailRegExp, 'Email address is not valid')
    .email('Please enter a valid email address!'),

  password: yup
    .string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
});

const SignUp = ({ modalClose }) => {
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const togglePassword = () => setIsPassword(!isPassword);

  const onSubmit = async data => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() =>
        toast.success('User registered successfully!', {
          position: 'top-center',
        }),
      )
      .catch(errMessage => {
        toast.error(errMessage, {
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
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.nameWrapper}>
          <input
            id={nameId}
            {...register('name')}
            placeholder="Name"
            className={clsx(css.input, css.name)}
          />
          <p className={css.errorText}>{errors.name?.message}</p>
        </div>

        <div className={css.emailWrapper}>
          <input
            id={emailId}
            {...register('email')}
            placeholder="Email"
            className={clsx(css.input, css.email)}
          />
          <p className={css.errorText}>{errors.email?.message}</p>
        </div>

        <div className={css.passwordWrapper}>
          <input
            id={passwordId}
            type={isPassword ? 'password' : 'text'}
            {...register('password', { required: true })}
            placeholder="Password"
            className={clsx(css.input, css.password)}
          />

          <button type="button" onClick={togglePassword} className={css.eyeBtn}>
            {isPassword ? (
              <img src={eyeIcon} alt="eye" className="eye" />
            ) : (
              <Icon
                id="eye"
                width={20}
                height={20}
                className={css.eye}
                fillColor="#121417"
              />
            )}
          </button>
          {errors.password && (
            <p className={css.errorText}>{errors.password?.message}</p>
          )}
        </div>

        <button type="submit" className={css.submitBtn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
