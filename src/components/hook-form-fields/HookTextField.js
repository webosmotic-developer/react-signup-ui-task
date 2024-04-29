import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { EyeOffOutline, EyeOutline } from 'react-ionicons';

// common input component managed according to react-hook-form
export const HookTextField = (props) => {
  const { field, fieldState, formState } = useController(props);
  const { type } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <p className="text-base">{props.label}</p>
      <div className="mb-6 mt-2">
        <div className="flex items-center justify-end mb-2 mt-1">
          <input
            className={`border-inputBorder appearance-none border rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-full text-base ${type === 'password' ? 'pr-11' : 'pr-2'}`}
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
          {/* displaying icons based on hide/show password state */}
          {type === 'password' ? (
            showPassword ? (
              <EyeOffOutline
                color={'#292D32'}
                width={'24px'}
                height={'24px'}
                className="absolute mr-3 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)} // hides password
              />
            ) : (
              <EyeOutline
                color={'#292D32'}
                width={'24px'}
                height={'24px'}
                className="absolute mr-3 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)} // displays password
              />
            )
          ) : null}
        </div>
        {/* displayed field errors */}
        {fieldState?.isTouched || formState?.isSubmitted ? (
          <p className="text-14 leading-5 text-helperGray">
            {fieldState?.error?.message}
          </p>
        ) : null}
      </div>
    </>
  );
};

HookTextField.propTypes = {
  label: PropTypes.any,
  type: PropTypes.string,
};
