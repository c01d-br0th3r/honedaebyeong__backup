import React, { useState, useEffect } from "react";
import { Placeholder } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";
import Cards from "../components/Cards";
import CardsTwo from "../components/CardsTwo";

const Container = styled.div`
  width: 1250px;
  margin: 0 auto;
  padding-top: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 300px));
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
`;

const GridTwo = styled.div`
  width: 1250px;
  column-count: 4;
  column-gap: 10px;
`;

const TitleGrid = styled.div`
  border: 1px solid gray;
  grid-column: span 2;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.6)
    ),
    url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2680&q=80");
  background-position: center;
  background-size: cover;
`;

const Main = () => {
  const [movies, setMovies] = useState({ loading: true, movie: [] });

  const handleMovies = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko&page=1"
      );
      setMovies({ loading: false, movie: results });
      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleMovies();
  }, []);
  return (
    <Container>
      {movies.loading ? (
        <div>Loading...</div>
      ) : (
        <Grid>
          <TitleGrid></TitleGrid>
          {movies.movie.map((m) => (
            <Cards
              key={m.id}
              img={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}
              title={m.title}
              score={m.vote_average}
              desc={m.overview}
            />
          ))}
        </Grid>
      )}
      {movies.loading ? (
        <div>Loading...</div>
      ) : (
        <GridTwo>
          {movies.movie.map((m) => (
            <CardsTwo
              key={m.id}
              img={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}
              title={m.title}
              score={m.vote_average}
              desc={m.overview}
            />
          ))}
        </GridTwo>
      )}
    </Container>
  );
};

export default Main;
