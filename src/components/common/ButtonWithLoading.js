import React from 'react';

import { PropTypes } from 'prop-types';

function ButtonWithLoading({ title, onClick, disabled }) {
  return (
    <button type="submit" onClick={onClick} disabled={disabled || false}>
      {title || 'Save'}
    </button>
  );
}

export default ButtonWithLoading;

ButtonWithLoading.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  customStyle: PropTypes.object,
  disabled: PropTypes.bool,
};
