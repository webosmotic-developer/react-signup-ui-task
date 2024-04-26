/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

/**
 * Common validations
 */

const validationSchemas = {
  usernameEmail: Yup.string()
    .trim()
    .email('Enter valid Email')
    .required('Email is required'),
  username: Yup.string()
    .trim()
    .min(3, 'Username must be at least 3 characters'),
  tnc: Yup.boolean().oneOf([true], 'Please accept terms and conditions'),
  password: Yup.string()
    .required('Password is required')
    .min(
      8,
      'The password must be at least 8 characters and contain at least 1 lowercase, 1 Uppercase,1 number, and 1 special character'
    )
    .matches(/[a-z]/, 'Password can contain letters')
    .matches(/[A-Z]/, 'Password can contain Capital letters')
    .matches(/[0-9]/, 'Password can contain numbers')
    .matches('^\\S*$', 'Whitespace is not allowed')
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Z]).{8,}$/,
      'Password can contain special characters'
    ),

  confirmPassword: Yup.string().when('password', {
    is: (val) => (val && val.length > 0 ? true : false),
    then: () =>
      Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same'
      ),
  }),
  bDate: Yup.string()
    .required('Date of birth is required')
    .max(
      new Date().toISOString().split('T')[0],
      'Date of birth cannot be of future'
    ),
};

export default validationSchemas;
