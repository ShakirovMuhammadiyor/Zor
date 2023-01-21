import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';

function RatingItem ({ name, stars }) {
    return (
        <Stack spacing={1}>
            <Typography>{name}</Typography>
            <Rating name="customized-10" defaultValue={stars} max={10} readOnly />
        </Stack>
    );
}

export default function () {
    return (
        <Container sx={{ position: "sticky", top: 70, pt: 3.5 }}>
            <Typography fontWeight={600} variant="h5">Mastery Rate</Typography>
            <Divider sx={{ mt: 2, mb: 3 }} />
            <Stack spacing={3}>
                {[1].map((x) => <><RatingItem name={"Introduction to regression"} stars={5} /><Divider /></>)}
            </Stack>
        </Container>
    );
}