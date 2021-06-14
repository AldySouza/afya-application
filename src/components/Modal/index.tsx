import React, { useState }  from 'react';

import { IProps } from './interfaces';

import { Overlay, Container, ModalHeader, ModalBody } from './styles';
import { ReactComponent as Close } from '../../assets/close.svg';

const Modal: React.FC<IProps> = ({ title, open, onClose, children}) => {

  return (
    open ?
    <Overlay>
      <Container>
          <Close onClick={() => onClose()}/>
          <ModalHeader>
            {title}
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
      </Container>
    </Overlay> : null
  );
}

export default Modal;