//Import das rotas 
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { getCharacters } from "../../api/DD";
import CharacterCard from "../../Pages/CharacterCard";
//import da imagem

import './style.css'

function Home(){

  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await getCharacters();
        setPersonagens(dados);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (carregando) return <p className="feedback">Carregando personagens...</p>;
  if (erro)

    return(
  <div className="home page">
      <h2 className="titulo-lista">Personagens</h2>
      <div className="lista-personagens">
        {personagens.map((personagem) => (
          <CharacterCard key={personagem.id} character={personagem} />
        ))}
      </div>
    </div>
)
}
export default Home