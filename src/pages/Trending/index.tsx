import React from 'react';
import { useEffect } from 'react';

import SearchServices from '../../services/SearchServices'

import Card from '../../components/Card'

import { MovieContainer } from '../../styles/GenericComponents'
import { useState } from 'react';
import { Movie } from '../../libs/movie';


const Trending: React.FC = () => {

  const [data, setData] = useState([])

  const getTrending = async () => {
    try {
      const response = await SearchServices.getTrending()

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

        return {
          id: movie.id + '22',
          genreIds: movie.genre_ids,
          overview: movie.overview,
          posterPath: movie.poster_path,
          title: movie.original_title,
          releaseDate: movie.release_date,
          voteAverageColor,
          voteAverage: movie.vote_average,
          backdropPath: movie.backdrop_path
        }
      })

      setData(formattedData)
    } catch(error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <>
    <span>Trending</span>
    <MovieContainer>
      {data.length > 0 && data.map((movie: Movie) => {

        return <Card  key={movie.id} data={movie} />
      })}
    </MovieContainer>
    </>
  );
}

export default Trending;