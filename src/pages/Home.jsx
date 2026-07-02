import { useEffect, useState } from "react";
import { getCharacters } from "../services/futuramaService";
import CharacterList from "../components/CharacterList";


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
    return <h2>Cargando personajes...</h2>;
    }

if (error) {
    return <h2>{error}</h2>;
    }

return (
    <div>
        <h1>Personajes de Futurama</h1>
        <CharacterList characters={characters} />
    </div>
    );
}

export default Home;