import React from 'react';

import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

/**
 * Common component for text input
 */

export const HookTextField = (props) => {
  const { field, fieldState, formState } = useController(props);

  return (
    <>
      <p className="text-base">{props.label}</p>
      <input
        className="border-inputBorder mb-3 mt-1 appearance-none border rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-full"
        {...field}
        {...props}
      />
      {(fieldState?.isTouched || formState?.isSubmitted) &&
        fieldState?.error?.message}
      {(fieldState?.isTouched || formState?.isSubmitted) &&
        Boolean(fieldState?.error)}
    </>
  );
};

HookTextField.propTypes = {
  label: PropTypes.any,
};
