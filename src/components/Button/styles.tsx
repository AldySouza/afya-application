import styled from 'styled-components';

export const ButtonComponent = styled.button`
  background: var(--primary);
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px;
  font-weight: 600;

  &:hover {
    background: var(--primary-dark);
    cursor: pointer;
    transition: all .6s;
  }
`;