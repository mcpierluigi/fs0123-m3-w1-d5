import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import HarryPotter from "./components/HarryPotter";
import StarWars from "./components/LordOfTheRings";
import HungerGames from "./components/HungerGames";

function App() {
  return (
    <>
      <TopBar />
      <section className="bg-dark movies">
        <HarryPotter />
        <StarWars />
        <HungerGames />
      </section>
    </>
  );
}

export default App;
