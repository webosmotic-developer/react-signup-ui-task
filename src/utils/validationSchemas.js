/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

/**
 * Common validations
 */

const validationSchemas = {
  email: Yup.string()
    .trim()
    .required('Email is required')
    .matches(
      /^([a-z][a-z0-9_]*|(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/,
      'Enter a valid email'
    ),
  username: Yup.string()
    .trim()
    .min(3, 'Username must be at least 3 characters'),
  tnc: Yup.boolean().oneOf([true], 'Please accept terms and conditions'),
  password: Yup.string()
    .required('Password is required')
    .min(
      8,
      'Password should contain at least 8 characters, 1 special symbol character, 1 number, 1 uppercase letter'
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,}).*$/,
      'Password should contain at least 8 characters, 1 special symbol character, 1 number, 1 uppercase letter'
    ),
  confirmPassword: Yup.string().when('password', {
    is: (val) => (val && val.length > 0 ? true : false),
    then: () =>
      Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same'
      ),
  }),
  bDate: Yup.date()
    .typeError('Enter a valid date')
    .required('Date of birth is required')
    .max(
      new Date().toISOString().split('T')[0],
      'Date of birth cannot be of future'
    ),
};

export default validationSchemas;
