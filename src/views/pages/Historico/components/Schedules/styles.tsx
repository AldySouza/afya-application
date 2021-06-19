import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #EEE;
  padding: 1.25rem;

  ._schedule {
    display: flex;
    align-items: center;
    justify-content: space-between;


    padding: 1.25rem 2rem;
    margin: .5rem 0;
    background: #FFFFFF;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.29);

    width: 80vw;

    .buttons {
      display: flex;
    }
  }


  h2 {
    color: var(--base-dark);
    margin: 20px 0 0;
    font-size: 2rem;
  }

  @media (max-width: 959px) {
    ._schedule {
      padding: .625rem;
      width: 90vw;
    }
  }

`;