import React from 'react';

// import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

/**
 * Common component for text input
 */

export const HookTextField = (props) => {
  const { field, fieldState, formState } = useController(props);
  return (
    <>
      <input {...field} {...props} />
      {(fieldState?.isTouched || formState?.isSubmitted) &&
        fieldState?.error?.message}
      {(fieldState?.isTouched || formState?.isSubmitted) &&
        Boolean(fieldState?.error)}
    </>
  );
};
