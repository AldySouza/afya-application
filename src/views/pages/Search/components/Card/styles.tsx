import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 4px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);
    background: #FFF;

    margin: .625rem 0;
    max-width: 418px;
    margin-left: 2vw;

    ._card {

        &-left {
            display: flex;
            flex-direction: column;
        }

        &-profile {
            display: flex;
        }

        &-image {
            margin-right: 0.5rem;
        }

        &-location {
            padding: 1rem .5rem;
        }
    }

`;