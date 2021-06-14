import styled from 'styled-components';


export const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
    padding: 20px;
    border-radius: 10px;
    min-width: 600px;
    min-height: 540px;

    background: #FFF;

    svg {
        cursor: pointer;
        position: relative;
        top: 6px;
        right: 6px;
        left: 95%;
    }
`;

export const ModalHeader = styled.div`
    height: 60px;
    width: 100%;

    font-size: 32px;
    color: #666;
`;

export const ModalBody = styled.div`
  width: 100%;

`;