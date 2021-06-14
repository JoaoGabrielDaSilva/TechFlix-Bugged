import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10%;
    min-height: 85px;

    padding: 0 10px;
    background: #222;
    color: #fff;

    display: grid;
    grid-template-columns: 9fr 5fr 1fr 1fr;    
    grid-gap: 10px;
    align-items: center;

    position: fixed;
    overflow: hidden;
    z-index: 1;
  
  img {
      cursor: pointer;
      width: 190px;
  }
`;

export const SearchInput = styled.input`
    width: 200px;
    height: 50%;

    padding: 10px;

    border: 1px solid #fff;
    border-radius: 5px;

    color: #fff;
`;

export const TabsWrapper = styled.ul`
    height: 100%;
    width: 100%;

    list-style: none;

    display: flex;
    justify-content: space-around;
    
`;

export const Tab = styled.li`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #444444;
        cursor: pointer;
    }
`;

export const LogoutButton = styled.button`
    color: #fff;
    background: red;
    border: 0;
    border-radius: 5px;
    height: 50%;
    width: 100px;
`;
