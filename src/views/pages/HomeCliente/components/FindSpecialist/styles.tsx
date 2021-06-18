import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  ._find-specialist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin-left: 30px;

    h1 {
      color: var(--base-dark);
      margin: 20px 0;
      font-size: 2rem;
    }

    h4 {
      font-size: 1.5rem;
      margin: 10px 0;
    }

    &-box {
      padding: 1.25rem;
      background: #FFFFFF;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.29);

      select {
        border: .0625rem solid #ccc;
        padding: .5rem .625rem;
        border-radius: .25rem;
        margin: 0 .3125rem;
      }
    }

    @media (max-width: 959px) {
      & {
        margin-left: 10px;
      }
      h1 {
        font-size: 1.5rem;
      }

      h4 {
        font-size: 1rem;
        margin: 10px 0;
      }

      select { 
        margin: 10px;
      }
    }
  }
  
  ._main-image {
    background-image: url('https://br.web.img3.acsta.net/pictures/19/11/04/16/13/2634348.jpg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 594px;
    height: 472px;

    @media (max-width: 959px) {
      & {
        display: none;
      }
    }
  }
`;