import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { RHFCheckbox } from '../../components/hook-form-fields/HookCheckBoxField';
import { HookTextField } from '../../components/hook-form-fields/HookTextField';
import validationSchemas from '../../utils/validationSchemas';

//manages validation for form fields
const validationSchema = yup.object({
  email: validationSchemas.email,
  username: validationSchemas.username,
  password: validationSchemas.password,
  confirmPassword: validationSchemas.confirmPassword,
  bDate: validationSchemas.bDate,
  tnc: validationSchemas.tnc,
});

const SignUp = () => {
  // Hook form integration to manage form state and errors efficiently
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    //sets default value to the form fields
    defaultValues: {
      username: '',
      email: '',
      bDate: '',
      password: '',
      confirmPassword: '',
      tnc: false,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    // receives form values as data and logs them to console
    const formData = {
      data,
      // Converts picked date to readable DD-MM-YYYY format
      bDate: new Date(data?.bDate).toLocaleDateString(),
    };
    console.log(formData);
  };

  return (
    <div className="px-4 py-2 flex justify-center">
      {/* manages form horiztal sizing */}
      <div className="max-w-xs">
        <p className="text-28 font-semibold leading-8 mt-11 mb-4">
          Let&apos;s get you started
        </p>
        <p className="text-base mb-6 text-helperGray">
          Already have account?
          {/* navigation to Login page */}
          <a className="font-medium text-linkColor ml-1" href={'/login'}>
            Login
          </a>
        </p>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <div>
            {/* common component for inputs managed according to react hook form */}
            <HookTextField
              control={control}
              name="username"
              label="Username"
              placeholder="Enter username"
            />
            <HookTextField
              control={control}
              type="date"
              name="bDate"
              label="Date of birth"
              max={new Date().toISOString().split('T')[0]} // Restricted future dates
              placeholder="DD/MM/YYYY"
            />
            <HookTextField
              control={control}
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter email address"
            />
            <HookTextField
              control={control}
              type="password"
              name="password"
              label="Password"
              placeholder="Enter password"
            />
            <HookTextField
              control={control}
              type="password"
              name="confirmPassword"
              label="Confirm password"
              placeholder="Confirm password"
            />
          </div>

          <div className="flex align-middle mb-91 gap-4">
            <div className="flex items-center">
              <RHFCheckbox name={'tnc'} control={control} />
            </div>
            <p className="text-base">
              I agree to the {/* navigation to terms and condition page */}
              <a className="font-base text-linkColor underline" href="/toc">
                Terms and Conditions
              </a>{' '}
              and {/* navigation to privacy policy page */}
              <a
                className="font-base text-linkColor underline"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>{' '}
              of this app.
            </p>
          </div>
          <button
            className={`${!isValid || !!Object.keys(errors).length ? 'bg-gray-400' : 'bg-primary'} w-full text-white py-3 rounded-lg font-base font-medium mb-2`}
            type="submit"
            disabled={!isValid || !!Object.keys(errors).length} // Disables button when form fields are invalid
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
