import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { CurrentStatus } from '..';
import Skeleton from '@mui/material/Skeleton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { CSSTransition } from 'react-transition-group';
import SpeedIcon from '@mui/icons-material/Speed';
import CircularProgress from '@mui/material/CircularProgress';
import RemoveIcon from '@mui/icons-material/Remove';
import { pink, teal } from '@mui/material/colors';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress color="secondary" variant="determinate" {...props} />
        <Box
            sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
            </Typography>
        </Box>
        </Box>
    );
}

export default function InnerBlock () {
    let full = useContext(CurrentStatus);

    let bbutton = <Skeleton height={40} variant="rounded"></Skeleton>;
    let stats = "";

    if (full.status === 1) {
        bbutton = <Button startIcon={<AddIcon />} sx={{ backgroundColor: "#9ccc65", border: "2px solid #c5e1a5", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#7cb342", borderColor: "#7cb342"}}}>Subscribe</Button>
    } else if (full.status === 3) {
        if (full.userdata.subscribed === true) {
            stats = <Grid container item xs={6} alignItems="flex-end" flexDirection="column" sx={{ pt: 1.5 }}>
                <Stack direction="row" spacing={4}>
                    <Box><Typography variant="h5" gutterBottom fontWeight={700}>0/1200</Typography><Typography>Mastery points </Typography></Box>
                    <Box><Typography variant="h5" gutterBottom fontWeight={700}>0/60</Typography><Typography>Skills are mastered</Typography></Box>
                    <Box><CircularProgressWithLabel value={20} /></Box>
                </Stack>
                <Stack direction="row" sx={{ mt: 3 }} spacing={2}>
                    <Button endIcon={<RemoveIcon />} sx={{ width: "140px", backgroundColor: "#c2185b", border: "2px solid #fce4ec", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#c2185b", borderColor: "#c2185b"} }}>Unsubscribe</Button>
                    <Button startIcon={<SpeedIcon />} sx={{ width: "150px", backgroundColor: "#26a69a", border: "2px solid #80cbc4", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#00897b", borderColor: "#00897b"}}}>My Progress</Button>
                </Stack>
            </Grid>
            bbutton = <Link href="/en/courses/video/0"><Button endIcon={<PlayCircleOutlineIcon />} sx={{ width: "400px", backgroundColor: "#5c6bc0", border: "2px solid #7986cb", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#3949ab", borderColor: "#3949ab"}}}>Continue</Button></Link>
        } else if (full.userdata.subscribed === false) {
            bbutton = <Button startIcon={<AddIcon />} sx={{ backgroundColor: "#9ccc65", border: "2px solid #c5e1a5", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#7cb342", borderColor: "#7cb342"}}}>Subscribe</Button>
        }
    }

    return (
        <Box sx={{ backgroundColor: "#f4f4f4", p: 5, pl: 7, pr: 7 }}>
            <Grid container>
                <Grid container item xs={6}>
                    <Stack spacing={2}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link className='under' href="/en/courses/all/0">Math</Link>
                            <Link className='under' href="/en/courses/all/0">Intermediate</Link>
                            <Typography color="text.primary">Introduction to Statistics</Typography>
                        </Breadcrumbs>
                        <Stack>
                            <Typography fontSize="34px" fontWeight={700}>College Algebra</Typography>
                            <Typography fontSize="23px" fontWeight={500} sx={{ letterSpacing: 0.5 }}>Course</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1.2}>
                            <Image width={30} height={30} alt="Remy Sharp" src="/images/user.png" />
                            <Typography display="flex" alignItems="center">Shokirov Muhammadiyor and 3 other tutors</Typography>
                        </Stack>
                        <CSSTransition in={(full.status == 1 || full.status == 3)} timeout={300} classNames="tab" unmountOnExit>
                        {bbutton}
                        </CSSTransition>
                    </Stack>
                </Grid>
                {stats}
            </Grid>
        </Box>
    );
}