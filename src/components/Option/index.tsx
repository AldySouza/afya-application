import React from 'react';

import { OptionComponent } from './styles';
import { IProps } from './interfaces';

const Option: React.FC<IProps> = ({ children, Value, Name }) => {
  return (
    <OptionComponent name={Name} value={Value}>
      {children}
    </OptionComponent>
  )
}

export default Option;