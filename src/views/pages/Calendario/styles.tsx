import styled from 'styled-components';

export const Container = styled.div`

    ._main-container {
        display: flex;
        justify-content: space-around;

        #page-map {
            position: relative;
            height: 180px;
            width: 600px;
            border: 1px solid #ccc;

            .leaflet-container, .leaflet-pane  {
                position: relative;
                height: inherit;
                width: inherit;
            }

            #map {
                height: 40%;
            }
        }


        #page-map .leaflet-container {
            z-index: 0;
        }
    }

`;

export const SearchBar = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;

    max-width: 41.8125rem;
    margin: 1.25rem auto 6.25rem;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    border: 1px solid #eee;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);
    background: #FFF;

    input {
        flex: 1;
        margin-right: .625rem;
    }

    ._search-icon {
        border-left: .1rem solid #ccc;
        padding-left: 1rem;
    }
`;