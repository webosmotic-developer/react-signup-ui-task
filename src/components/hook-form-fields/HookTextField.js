import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { EyeOffOutline, EyeOutline } from 'react-ionicons';

/**
 * Common component for text input
 */

export const HookTextField = (props) => {
  const { field, fieldState, formState } = useController(props);
  const { type } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <p className="text-base">{props.label}</p>

      <div className="flex items-center justify-end mb-3 mt-1">
        <input
          className={`border-inputBorder appearance-none border rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-full text-base ${type === 'password' ? 'pr-11' : 'pr-2'}`}
          {...field}
          {...props}
          type={
            type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : props?.type
          }
        />
        {type === 'password' ? (
          showPassword ? (
            <EyeOffOutline
              color={'#292D32'}
              width={'24px'}
              height={'24px'}
              className="absolute mr-3"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <EyeOutline
              color={'#292D32'}
              width={'24px'}
              height={'24px'}
              className="absolute mr-3"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )
        ) : null}
      </div>

      {fieldState?.isTouched || formState?.isSubmitted ? (
        <p className="text-14 leading-5 text-helperGray mb-3">
          {fieldState?.error?.message}
        </p>
      ) : null}
      {fieldState?.isTouched || formState?.isSubmitted ? (
        <p className="text-14 leading-5 text-helperGray mb-3">
          {Boolean(fieldState?.error)}
        </p>
      ) : null}
    </>
  );
};

HookTextField.propTypes = {
  label: PropTypes.any,
  type: PropTypes.string,
};
