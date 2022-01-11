import React, { useState, useEffect } from 'react';

const Checkbox = ({ categories = [] }) => {
  return categories.map((category, idx) => (
    <li key={idx} className='list-unstyled'>
      <input type='checkbox' className='form-check-input' />
      <label className='form-check-label'>{category.name}</label>
    </li>
  ));
};

export default Checkbox;
