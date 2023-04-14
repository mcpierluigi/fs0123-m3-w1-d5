import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class Twilight extends Component {
  state = {
    movies: []
  };

  fetchTwilight = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d6ab55c3&s=Twilight");
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
    this.fetchTwilight();
  }

  render() {
    return (
      <Container className="text-light mt-2">
        <h2>Twilight</h2>
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
export default Twilight;
