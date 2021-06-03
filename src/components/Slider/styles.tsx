import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

    .dots {
      display: flex;
      justify-content: center;
      align-self: center;

      .dot {
          width: .625rem;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          margin: 0 .1875rem;
          cursor: pointer;
      }
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
      cursor: pointer;
      background: transparent;

      svg {
        fill: var(--primary);
        margin: 0 10px;
      }
  }

`;

export const Item = styled.div`
  width: 100%;
  align-self: center;
  margin: 0 auto;
  text-align: center;

  img {
      width: 30.5rem;
      max-width: 70vw;
      height: 11.0625rem;
  }
`;