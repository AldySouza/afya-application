import styled from 'styled-components';

export const ButtonComponent = styled.button`
  background: #fff;
  color: var(--base-dark);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    transition: all .6s;
  }
`;