import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';

import Link from 'next/link';

import Image from 'next/image';

import EditIcon from '@mui/icons-material/Edit';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

export default function () {
    return (
        <Box sx={{ pt: 6, pl: 13, pr: 13 }}>
        <Box>
            <Grid container>
                <Grid item container xs={6}>
                    <Typography sx={{ color: "#263238", fontSize: "2.5rem", fontWeight: 700 }}>My Courses</Typography>
                </Grid>
                <Grid item container xs={6} justifyContent="flex-end" alignItems="center">
                    <Button variant="outlined" color="secondary" startIcon={<EditIcon />} sx={{ height: 35 }}>Edit Courses</Button>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ paddingTop: 4 }}>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Cardd />
                </Grid>
            </Grid>
        </Box>
    </Box>
    );
}

function Cardd() {
    return (
        <Card sx={{ backgroundColor: "#eeeeee" }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">   
                    <Box>
                        <Link href="/en/courses/course/0" className='under'><Typography fontWeight={700} fontSize="1.5rem" marginBottom={0.3}>College Algebra</Typography></Link>
                        <Typography>0% Mastered</Typography>
                    </Box>
                    <Link href="/en/courses/video/0"><Box>{true ? <NotStartedIcon sx={{ width: 20, height: 20, color: "#292929", "&:hover": {color: "#000"} }} /> : <PlayCircleFilledWhiteIcon />}</Box></Link>
                </Stack>
            </CardContent>
            <Divider sx={{mt: -1.6}} variant="middle" textAlign="right"><Link href="/en/courses/unit/0"><Chip size="small" variant="outlined" label="Unit 1" /></Link></Divider>
            <CardActions>
                <Grid item xs={12} flexDirection="column">
                    <List dense={false} sx={{ paddingRight: 1 }}>
                        <ListItem secondaryAction={<Link href="/en/courses/video/0"><Button color="secondary" sx={{ backgroundColor: "#ffffff" }}>Resume</Button></Link>}>
                            <ListItemAvatar><Image width={40} height={40} style={{ borderRadius: "100%" }} src="/images/theme.png" /></ListItemAvatar>
                            <Link href="/en/courses/unit/0/0" className='under'><ListItemText primary="Solving linear inequalities" secondary={'0% Mastered'}/></Link>
                        </ListItem>
                    </List>
                </Grid>
            </CardActions>
        </Card>
    );
}