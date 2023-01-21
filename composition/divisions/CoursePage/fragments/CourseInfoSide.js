import { Fragment } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InlineDot from '../../../particles/InlineDot'
import DescriptionIcon from '@mui/icons-material/Description';
import PublicIcon from '@mui/icons-material/Public';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Image from 'next/image';
import Link from 'next/link';


function PreresquitCourse ({ id, type, name, hashtags }) {
    return (
        <Link href={`/en/courses/${type}/[id]`} as={`/en/courses/${type}/${id}`}>
            <Card sx={{ display: 'flex' }}>
                <Image width={70} height={70} src="/images/theme.png" />
                <CardContent sx={{ '&:last-child': {pb: 0}, pl: 2, pr: 2 }}>
                    <Typography gutterBottom fontSize="15px">{type.charAt(0).toUpperCase() + type.slice(1) + ": " + name}</Typography>
                    <Typography variant='body2' color="text.secondary">{hashtags.map((hashtag, i) => {
                        return i != hashtags.length - 1 ? (<Fragment key={i}>{hashtag}<InlineDot /></Fragment>) : (<Fragment key={i}>{hashtag}</Fragment>);
                    })}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

function Contributor ({ id, name, picture, role }) {
    return (
        <Link href="/en/courses/profile/[id]" as={`/en/courses/profile/${id}`}>
            <ListItem disableGutters>
                <ListItemAvatar><Image width={40} height={40} style={{ borderRadius: "100%" }} src={`/images/${picture}`} /></ListItemAvatar>
                <ListItemText primary={name} secondary={role} />
            </ListItem>
        </Link>
    );
}


export default function CourseInfoSide () {
    return (
        <Container sx={{ paddingTop: 3.5 }}>
                <Typography gutterBottom fontWeight={700} variant="h5">About this course</Typography>
                <Typography lineHeight={1.8} color="#808080">Get a huge of what it is like to analyze a big amount of data. In this course you will learn so many things that you have never knew before. This course is designed for beginners with no prior knowledge of computers</Typography>
                <Grid container sx={{ pt: 3, pb: 3 }} rowSpacing={2} columnSpacing={5}>
                    <Grid item><Stack direction="row" spacing={1}><DescriptionIcon /><Typography>12 Units</Typography></Stack></Grid>
                    <Grid item><Stack direction="row" spacing={1}><PublicIcon /><Typography>EN/RU/UZ</Typography></Stack></Grid>
                    <Grid item xs={12}><Stack direction="row" spacing={1}><ScheduleIcon /><Typography>Last updated at: 27 February 2022</Typography></Stack></Grid>
                </Grid>
                <Divider />
                <Box sx={{ pt: 2, pb: 2 }}>
                    <Typography variant="h6">Contributors</Typography>
                    <List>
                        <Contributor id={0} name="Sarvarbek Xabbibidinov" picture="user.jpg" role="Main Scenario" />
                        <Contributor id={1} name="Aleksandrov Ruslan" picture="user.jpg" role="Sound Engineer" />
                    </List>
                </Box>
                <Divider />
                <Box sx={{ pt: 2, pb: 2 }}>
                    <Typography gutterBottom variant="h6">Preresquites</Typography>
                    <Typography variant="body2">We'd recommend you to look at this materials beforehand:</Typography>
                    <Stack sx={{ mt: 3 }} spacing={3}>
                        <PreresquitCourse type="course" id={0} name="College Algebra" hashtags={["Algebra", "Fundamental", "Course"]} />
                    </Stack>
                </Box>
        </Container>
    );
}