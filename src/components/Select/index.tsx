import React from 'react';

import { SelectComponent } from './styles';
import { IProps } from './interfaces';

const Select: React.FC<IProps> = ({ children, onChange, Name }) => {
  return (
      <SelectComponent onChange={onChange} name={Name} >
        {children}
      </SelectComponent>
  )
}

export default Select;


<select name="select">
  <option value="valor1">Valor 1</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
</select>