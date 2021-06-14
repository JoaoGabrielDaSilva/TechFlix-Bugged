import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSearch } from '../../contexts/Search';

import { Container, SearchInput, TabsWrapper, Tab, LogoutButton } from './styles';


const Header: React.FC = () => {

  const history = useHistory()

  const {handleChange, inputValue} = useSearch()

  const navigate = (path: string) => {
    history.push(path)
  }

  const logout = () => {
    localStorage.removeItem('user')
    history.push('/login')
  }

  return <Container>
    <img src="https://i.imgur.com/7WULlyC.png" alt="Logo" onClick={() => navigate('/')}/>
    <TabsWrapper>
      <Tab onClick={() => navigate('/trending')}>Trending</Tab>
      <Tab onClick={() => navigate('/movies')}>Movie</Tab>
    </TabsWrapper>
    <SearchInput placeholder="Buscar Filmes" onChange={handleChange} value={inputValue}/>
    <LogoutButton onClick={logout}>Logout</LogoutButton>
  </Container>;
}

export default Header;