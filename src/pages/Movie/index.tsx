import React from 'react';
import { useEffect } from 'react';
import { MovieContainer } from '../../styles/GenericComponents'

import SearchService from '../../services/SearchServices'
import { useState } from 'react';
import { Movie } from '../../libs/movie';
import Card from '../../components/Card';

const Movies: React.FC = () => {

  const [data, setData] = useState([])

  const getMovies = async () => {
    try {
      const response = await SearchService.getMovies()

      const formattedData = response.map((movie: any) => {
        let voteAverageColor;

        switch(true) {
          case movie.vote_average > 6: 
            voteAverageColor = 'green'
            break
          case movie.vote_average < 6 && movie.vote_average > 3.5:
            voteAverageColor = 'yellow'
            break
          case movie.vote_average < 3.5:
            voteAverageColor = 'red'
            break
        }

        const a = Math.round(Math.random() * 5);

        return {
          id: movie.id,
          genreIds: movie.genre_ids,
          overview: movie.overview,
          posterPath: movie.poster_path,
          title: movie.original_title + 'INN',
          releaseDate: movie.release_date,
          voteAverageColor,
          voteAverage: movie.vote_average,
          backdropPath: `${movie.backdrop_path}${ a === 5 ? 'png' : ' '}`
        }
      })

      setData(formattedData)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <>
    <span>Movies</span>
    <MovieContainer>
      {data.length > 0 && data.map((movie: Movie) => {
        
        return <Card key={movie.id} data={movie} />
      })}
  </MovieContainer>
    </>
  );
}

export default Movies;