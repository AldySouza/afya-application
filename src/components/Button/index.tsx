import React from 'react';

import { ButtonComponent } from './styles';
import { IProps } from './interfaces';

const Button: React.FC<IProps> = ({ children, onClick, disable }) => {
    return (
        !disable ?
            <ButtonComponent onClick={onClick}>
                {children}
            </ButtonComponent>
            :
            <ButtonComponent onClick={onClick} disabled>
                {children}
            </ButtonComponent>
    )
}

export default Button;