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
      <p>{props.label}</p>
      <input {...field} {...props} />
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
