import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header titulo="Galería de imágenes Pokemon" />
      {/* Container de Card */}
      <Container>
        <Row>
          <Col>
            <Card  imagen="https://www.cpokemon.com/images/pokedex/sprites/dp/001-f.png" titulo="Bulbasaur" descripcion="Una rara semilla fue plantada en su espalda al nacer. La planta brota y crece con este Pokémon."/>
          </Col>
          <Col>
            <Card  imagen="https://www.cpokemon.com/images/pokedex/sprites/dp/004-f.png" titulo="Charmander" descripcion="Prefiere los sitios calientes. Dicen que cuando llueve sale vapor de la punta de su cola." />
          </Col>
          <Col> 
            <Card  imagen="https://www.cpokemon.com/images/pokedex/sprites/dp/007-f.png" titulo="Squirtle" descripcion="Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca."/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </div>
  );
}

export default App;
