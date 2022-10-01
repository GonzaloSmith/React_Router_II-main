import { Container } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Bienvenido maestro Pokemón</h1>
      <img
          height="200px"
            src="https://c.tenor.com/fCvghb3z3MEAAAAj/pokemon-pikachu.gif"
          alt=""
        />      
    </Container>
  );
};