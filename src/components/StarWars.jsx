import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class StarWars extends Component {
  state = {
    movies: []
  };

  fetchStarWars = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d6ab55c3&s=star%20wars");
      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };
  componentDidMount() {
    this.fetchStarWars();
  }

  render() {
    return (
      <Container className="mt-2 text-light">
        <h2>Star Wars</h2>
        <Row>
          {this.state.movies.map((movie, index) => (
            <Col sm={2}>
              <SingleMovie key={`movie-${index}`} src={movie.Poster} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default StarWars;
