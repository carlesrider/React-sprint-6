
import styled from 'styled-components';

export const Escena = styled.p`
    width: auto;
    border-radius: 2rem;
    padding: 1rem;
    border: 2px solid #000;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    transition: all 0.2s ease-in-out;

    &.selected {
        background-color: #ffc0cb;
    }
`;
