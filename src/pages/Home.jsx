import { useEffect, useState } from "react";
import { getCharacters } from "../services/futuramaService";
import CharacterList from "../components/CharacterList";
import { CircularProgress, Alert } from "@mui/material";
import futuramaLogo from "../assets/futuramaLogo.png";
import "./Home.css";


function Home() {
  // Lista de personajes
    const [characters, setCharacters] = useState([]);

  // Estado de carga
    const [loading, setLoading] = useState(true);

  // Estado de error
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchCharacters = async () => {
        try {
        const data = await getCharacters();
        setCharacters(data);
        } catch (err) {
        setError("Error al obtener los personajes");
        } finally {
        setLoading(false);
        }
    };

    fetchCharacters();
    }, []);

    if (loading) {
    return <CircularProgress />;
    }

if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

if (characters.length === 0) {
    return <Alert severity="info">No se encontraron personajes.</Alert>;
}


return (
    <div>
          <img
      src={futuramaLogo}
      alt="Futurama"
      className="home-logo"
      />
        <CharacterList characters={characters} />
    </div>
    );
}

export default Home;