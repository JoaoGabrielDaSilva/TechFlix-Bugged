import React, { useState } from 'react';

import { MovieContainer } from '../../styles/GenericComponents';
import Card from '../../components/Card';
import { useSearch } from '../../contexts/Search';
import { useEffect } from 'react';
import { Movie } from '../../libs/movie';

const MovieSearch: React.FC = () => {

    const { getMovies, inputValue } = useSearch()
    const [data, setData] = useState<Movie[]>([])

    const getSearchedMovies = async () => {
        const movies = await getMovies()
        setData(movies)
    }

    useEffect(() => {
        getSearchedMovies()
    }, [inputValue])


  return <MovieContainer>
      
      {data.length > 0 && 
          data.map(movie => (
            <Card key={movie.id} data={movie}/>
          ))
      }
      {data.length === 0 && (
          <span>Erro na busca (40014)</span>
      )}
  </MovieContainer>;
}

export default MovieSearch;