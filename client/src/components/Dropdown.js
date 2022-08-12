import React from 'react';

function Dropdown({ value, options, onChange }) {
  return (
    <label>
      <select value={value} onChange={onChange}>
        <option default disabled>
          title
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;
