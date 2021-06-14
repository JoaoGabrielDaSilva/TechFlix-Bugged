import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, CardImage, CardInfo, Note, Title, ReleaseDate } from './styles';

interface MovieProps {
    data: {
        id: number;
        genreIds: number[];
        overview: string;
        posterPath: string;
        title: string;
        releaseDate: string;
        voteAverageColor: string;
        voteAverage: number;
        backdropPath: string;
    }
}

const Card: React.FC<MovieProps> = ({ data }) => {

  const history = useHistory()

  const movieData = {};

  const getDetails = () => {
    history.push('movie-details', movieData)
  }

  return <Container onClick={() => getDetails()}>
      <CardImage src={`https://image.tmdb.org/t/p/w500${data.backdropPath}`} />
      <Note color={data.voteAverageColor}>{data.voteAverage}</Note>
      <CardInfo>
        <Title>{data.title}</Title>
        <ReleaseDate>{format(new Date(data.releaseDate), "dd/MM/yyyy", {locale: ptBR})}</ReleaseDate>
      </CardInfo>
  </Container>;
}

export default Card;