import styled from 'styled-components';

export const LoadingComponent = styled.div`

    .lds-ring {
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(0,0,0, .2);
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 4px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--primary);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--primary) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;