import HarryPotter from "./HarryPotter";
import StarWars from "./StarWars";
import HungerGames from "./Twilight";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container fluid className="bg-dark">
      <section className="py-2">
        <HarryPotter />
        <StarWars />
        <HungerGames />
      </section>
    </Container>
  );
}

export default Home;
