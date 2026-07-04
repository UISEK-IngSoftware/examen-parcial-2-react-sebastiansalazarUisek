import {Grid} from "@mui/material";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

export default function CharacterList({ characters }) {
    return (
        <Grid container spacing={2}>
        {characters.map((character) => (
            <Grid item key={character.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CharacterCard character={character} />
            </Grid>
        ))}
        </Grid>
    );
}
