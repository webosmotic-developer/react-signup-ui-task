import React from 'react';

import { PropTypes } from 'prop-types';

function ButtonWithLoading({ title, onClick, disabled, type }) {
  return (
    <button
      className={`${disabled ? 'bg-gray-400' : 'bg-primary'} w-full text-white py-3 rounded-lg font-base font-medium mb-2`}
      type={type}
      onClick={onClick}
      disabled={disabled || false}
    >
      {title || 'Save'}
    </button>
  );
}

export default ButtonWithLoading;

ButtonWithLoading.propTypes = {
  customStyle: PropTypes.object,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.any,
};
