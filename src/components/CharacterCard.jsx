import {Card, CardContent, CardActions, CardMedia, Button, Typography} from "@mui/material";


export default function CharacterCard({ character }) {
    return (
    <Card className="character-card">
        <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            height="200"
        />

        <CardContent>
            <Typography variant="h6" component="div">
            {character.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
            Género: {character.gender}
            </Typography>

            <Typography variant="body2" color="text.secondary">
            Estado: {character.status}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" disabled>
                Ver Detalles
            </Button>
</CardActions>
    </Card>
    );
}