import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .leftContainer, .rightContainer {
      height: 100vh;
      width: 50%;
  }

  .rightContainer {

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;

      background: #13132B;

      h1 {
          color: #C4C4C4;
          font-size: 56px;
          font-weight: 600;
          margin: 0 50px 60px 0;
      }

      svg {
          width: 388px;
          height: 105px;
      }

      @media (max-width: 959px) {
          & {
              width: 20%;

              h1, svg { display: none}
          }
      }

  }

  .leftContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    .signinForm {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        background: #FFFFFF;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.29);

        width: 392px;
        height: auto;
        padding: 20px;
        text-align: center;

        svg {
            width: 180px;
            height: 52px;
            margin-bottom: 27px;
        }

        input, button {
            margin: 10px 0 0;
            width: 100%;
        }

        button {
            margin-top: 30px;
        }

        span {
            margin: 30px 0;

            strong {
                color: rgba(212, 0, 84, 1);
                cursor: pointer;
            }
        }
    }
    @media (max-width: 959px) {
        & {
            min-width: 80vw;
        }
        .signinForm {
            margin-left: -50px;
        }
    }
  }
`;