
import styled from 'styled-components';

export const Welcome = styled.div`
    width: 50%;
    margin: 4rem auto;
    padding: 4rem;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.06);
    h1 {
        margin-bottom: 4rem;
    }
    Button {
        border-radius: 2rem;
        width: auto;
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: bold;
        background-color: #efefef;
        border: 2px solid #000;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`;
