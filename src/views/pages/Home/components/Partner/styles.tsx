import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;


  h2 {
    color: var(--base-dark);
    margin: 20px 0 0;
    font-size: 2rem;
  }

  @media (max-width: 959px) {
    font-size: 1rem;
  }

`;