import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 4px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);
    background: #FFF;

    margin: .625rem 0;
    max-width: 418px;
    margin-left: auto;
    margin-right: 2vw;

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
            width: 181px;
            height: 98px;
            object-fit: cover;
            background: #ccc;
        }

        &-location {
            padding: 1rem .5rem;
            
            p { color: #666; line-height: 1.5rem}
            strong { color: #333}
        }

        &-info {
            margin-top: .625rem;
            
            span { color: #ccc; line-height: 1.5rem}
            h4 { color: #333}
        }
    }

`;