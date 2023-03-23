
import styled from 'styled-components';

export const Escena = styled.div`
    p {
 
        width: auto;
        border-radius: 2rem;
        padding: 1rem;
        border: 2px solid #000;
        text-align: center;
        margin-left: 1rem;
        margin-right: 1rem;
        background-color: rgba(255,255,255,0.8);
        transition: all 0.2s ease-in-out;

        &.selected {
            background-color: #ffc0cb;
        }
    }
    
    img {
        display: none;
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        &.selected {
            display: block;
        }
    }   

`;
