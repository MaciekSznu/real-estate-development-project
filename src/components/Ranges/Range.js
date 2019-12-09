import React from 'react';
import PropTypes from 'prop-types';

const RangeSlider = ({ type = 'range', min, max, value, label, onChange }) => (
  <input type={type} min={min} max={max} value={value} label={label} onChange={onChange} />
);

RangeSlider.propTypes = {
  type: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default RangeSlider;