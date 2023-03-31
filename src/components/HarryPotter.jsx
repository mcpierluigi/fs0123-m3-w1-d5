import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class HarryPotter extends Component {
  state = {
    movies: [],
  };

  fetchHarryPotter = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=d6ab55c3&s=harry%20potter"
      );
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
    this.fetchHarryPotter();
  }

  render() {
    return (
      <Container className="mt-2">
        <h1>Harry Potter</h1>
        <Row>
          {this.state.movies.map((movie, index) => (
            <Col sm={2} key={`movie-${index}`}>
              <img className="Poster" src={movie.Poster} alt="" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default HarryPotter;
