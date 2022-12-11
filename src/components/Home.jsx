import { Container, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="center">
      <h1>Bienvenido maestro Pokémon</h1>
      <Image
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
        width="300px"
      />
    </Container>
  );
};

export default Home;