import styled from 'styled-components';

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 30px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  background: #FFF;

  position: sticky;
  top: 0;

  @media (max-width: 959px) {
    & {
      padding: 0 10px;
    }
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