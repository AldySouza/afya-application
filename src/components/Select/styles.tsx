import styled from 'styled-components';

export const SelectComponent = styled.select`
  background: var(--primary);
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 15px;
  font-weight: 600;

  &:hover {
    background: var(--primary-dark);
    cursor: pointer;
    transition: all .6s;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;