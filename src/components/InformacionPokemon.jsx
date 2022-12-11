import { Container, Image, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const InformacionPokemon = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setDetails(data);
          setLoading(false);
        });
      } else {
        navigate("/pokemones");
      }
    });
  }, [name]);

  return (
    <Container className="center">
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <>
          <h1 className="name">{name}</h1>
          <div className="pokemon-details">
            <Image
              src={details.sprites.other["official-artwork"].front_default}
              width="380px"
            />
            <ul className="stats">
              {details.stats.map((stat) => {
                return (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                );
              })}
              <span className={"type " + details.types[0].type.name}>
                {details.types[0].type.name}
              </span>
            </ul>
          </div>
        </>
      )}
    </Container>
  );
};

export default InformacionPokemon;