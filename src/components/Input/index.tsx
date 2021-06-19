import React from 'react';

import { InputComponent } from './styles';
import { IProps } from './interfaces';

const Input: React.FC<IProps> = ({ onChange, placeHolder, inputType, Name, Value }) => {
    return (
        <InputComponent type={inputType} onChange={onChange} placeholder={placeHolder} name={Name} value={Value} />
    )
}

export default Input;