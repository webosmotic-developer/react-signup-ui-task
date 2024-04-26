import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const RHFCheckbox = (props) => {
  const { name, disabled = false, control, onChange, checkedValue } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            name={name}
            {...field}
            type="checkbox"
            className="h-6 w-6 rounded-md border-inputBorder"
            disabled={disabled}
            checked={checkedValue ?? field?.value}
            onChange={(value) => {
              field?.onChange(value);
              if (onChange) {
                onChange(value);
              }
            }}
          />
        )}
      />
    </>
  );
};

RHFCheckbox.propTypes = {
  control: PropTypes.any,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checkedValue: PropTypes.bool,
};

export { RHFCheckbox };
