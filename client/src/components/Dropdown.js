import React from 'react';

function Dropdown({ label, value, options, onChange }) {
  return (
    <label>
      <select value={value} onChange={onChange}>
        <option default disabled>
          {label}
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;
