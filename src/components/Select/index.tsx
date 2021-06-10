import React from 'react';

import { SelectComponent } from './styles';
import { IProps } from './interfaces';

const Select: React.FC<IProps> = ({ children, onChange }) => {
  return (
      <SelectComponent onChange={onChange} >
        {children}
      </SelectComponent>
  )
}

export default Select;
