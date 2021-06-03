import styled from 'styled-components';

export const FooterComponent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  background-color: #13132B;
  color: white;

  height: 200px;
  padding: 30px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);

  a {
    color: white;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      margin: 0 10px;

      strong select {
        color: var(--primary);
        font-weight: bold;
        cursor: pointer;
        
        &::-webkit-scrollbar {
          display: none;
        }

        & {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      }
    }
  }
`;