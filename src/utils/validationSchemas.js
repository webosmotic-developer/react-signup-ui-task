/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

/**
 * Common validations
 */

const validationSchemas = {
  usernameEmail: Yup.string()
    .email('Enter valid Email')
    .min(3, 'Username is too short - should be 3 chars minimum')
    .required('Email is required'),
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
      /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g,
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
};

export default validationSchemas;
