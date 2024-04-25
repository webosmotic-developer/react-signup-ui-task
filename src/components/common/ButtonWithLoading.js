import React from 'react';

import { PropTypes } from 'prop-types';

function ButtonWithLoading({ title, onClick, disabled, type }) {
  return (
    <button
      className="bg-primary w-full text-white py-1.5 rounded-lg font-base font-medium"
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
