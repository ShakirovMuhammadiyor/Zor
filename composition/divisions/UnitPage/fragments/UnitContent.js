import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import AccordionDetails from '@mui/material/AccordionDetails';


import Link from 'next/link';
import Image from 'next/image';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AirplayIcon from '@mui/icons-material/Airplay';
import ArticleIcon from '@mui/icons-material/Article';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';




function Topic () {
    return (
        <Accordion sx={{ '&:before': {display: "none"}, borderRadius: 1 }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                    <Image width={35} height={35} src="/images/theme.png" style={{ borderRadius: 6 }} />
                    <Typography fontWeight={500} fontSize="15px" sx={{ ml: 2 }}>Solving equations with one unknown</Typography>
                    <Link href="/en/courses/video/0" style={{ height: "100%" }}><Button variant="outlined" size="small" color="other3" endIcon={<PlayCircleOutlineIcon />} sx={{ml: 3, height: "100%"}}>Resume</Button></Link>
                </Stack>
                <Stack sx={{ display: "flex", alignItems: "flex-end", mr: 3 }} spacing={1}>
                    <Typography>0/1200 Mastery points</Typography>
                    <LinearProgress value={40} variant="determinate" sx={{ width: "200px" }} color="other3" />
                </Stack>
            </AccordionSummary>
            <Divider variant="middle" sx={{ mt: -0.5 }} />
            <AccordionDetails>
                <Grid container sx={{ pt: 2, pl: 1, pb: 1 }}>
                    <Grid item xs={6}>
                        <Stack spacing={2.4}>
                            <Stack direction="row" alignItems="center" spacing={1.5}>
                                <Avatar variant="rounded" sx={{ backgroundColor: "#ffffff", color: "#4a4a4a", border: "1px solid #eeeeee", width: 26, height: 26 }}><AirplayIcon sx={{ fontSize: "16px" }} /></Avatar>
                                <Link href="/en/courses/video/0" className='under' sx={{ color: "#4a4a4a" }}>Equations with parentheses</Link>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1.5}>
                                <Avatar variant="rounded" sx={{ backgroundColor: "#ffffff", color: "#4a4a4a", border: "1px solid #eeeeee", width: 26, height: 26 }}><ArticleIcon sx={{ fontSize: "16px" }} /></Avatar>
                                <Link href="/en/courses/article/0" className='under' sx={{ color: "#4a4a4a" }}>Multi-step equations review</Link>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={3}>
                            {/* <Grid container sx={{ backgroundColor: "#f4f4f4", borderRadius: 1, pt: 1.2, pb: 1.2 }}>
                                <Grid item xs={7} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: 2 }}>
                                    <Typography variant="subtitle1">Introduction to regression</Typography>
                                    <Typography variant="subtitle2">Last time: 22 days ago</Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Button color="secondary" variant='outlined'>Try Again</Button>
                                </Grid>
                                <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Avatar variant='rounded' sx={{ width: 30, height: 30, backgroundColor: "#00bcd4" }}><MilitaryTechIcon /></Avatar>
                                </Grid>
                            </Grid> */}
                            <Grid container sx={{ backgroundColor: "#f4f4f4", borderRadius: 1, pt: 1.2, pb: 1.2 }}>
                                <Grid item xs={7} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: 2 }}>
                                    <Typography variant="subtitle1">Number of solutions to equations</Typography>
                                    <Typography variant="subtitle2">Not attempted</Typography>
                                </Grid>
                                <Grid item xs={5} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", pr: 2}}>
                                    <Link href="/en/courses/check/0"><Button color="secondary" variant='outlined' sx={{ backgroundColor: "#c2185b", color: "#ffffff", "&:hover": {backgroundColor: "#ad1457"} }}>Start</Button></Link>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}

export default function () {
    return (
        <Container maxWidth="xl" sx={{ pt: 4 }}>
            <Stack spacing={4}>
                <Topic />
            </Stack>
        </Container>
    );
}