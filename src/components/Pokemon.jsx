import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    if (pokemon != "Pokemones") {
      navigate(`/pokemones/${pokemon}`);
    }
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <Container className="center">
      <h1>Selecciona un Pokemon</h1>
      <Form.Select onChange={(event) => setPokemon(event.target.value)}>
        <option>Pokemones</option>
        {pokemonList
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {poke.name}
              </option>
            );
          })}
      </Form.Select>
      <Button variant="dark" onClick={handleClick}>
        Ver detalle
      </Button>
    </Container>
  );
};

export default Pokemon;