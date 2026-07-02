import axios from "axios";

const API_BASE_URL = "https://futuramaapi.com/api/characters";


export const getCharacters = async () =>  {
    try {
        const response = await axios.get(API_BASE_URL, {
            params: {
                orderBy: "id",
                orderByDirection: "asc",
                page: 1,
                size: 50,
            }
        });
        return response.data.items;
    } catch (error) {
        console.error("Error obteniendo personajes:", error);
        throw error;
    }
}