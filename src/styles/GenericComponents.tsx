import styled from 'styled-components'

export const MovieContainer = styled.div`
    width: 100%;

    background: #2d2b2b;
    padding-top: 7%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-items: center;

    span {
        color: #fff;
    }
`;