import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SpeedIcon from '@mui/icons-material/Speed';

import Link from 'next/link';


export default function () {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ backgroundColor: "#f4f4f4", p: 5, pl: 3, pr: 3 }}>
            <Grid container>
                <Grid container item xs={8}>
                    <Stack spacing={2}>
                        <Breadcrumbs>
                            <Link className='under' href="/en/courses/all/0">Math</Link>
                            <Link className='under' href="/en/courses/all/0">Intermediate</Link>
                            <Link className='under' href="/en/courses/course/0">Algebra 2</Link>
                            <Typography color="text.primary">Linear Regression and Analysis</Typography>
                        </Breadcrumbs>
                        <Typography gutterBottom fontSize="34px" fontWeight={700}>Unit: Linear equations and inequalities</Typography>
                        <Typography variant="subtitle1">Linear equations and inequalities are the basis of what is known as Algebra</Typography>
                    </Stack>
                </Grid>
                <Grid container item xs={4} alignItems="flex-end" flexDirection="column" sx={{ paddingTop: 1.5 }}>
                    <Stack direction="row" spacing={4}>
                        <Box><Typography variant="h5" gutterBottom fontWeight={700}>0/1200</Typography><Typography>Mastery points </Typography></Box>
                        <Box><Typography variant="h5" gutterBottom fontWeight={700}>0/60</Typography><Typography>Skills are mastered</Typography></Box>
                        <Box><Typography variant="h5" gutterBottom fontWeight={700}>1 (1)</Typography><Typography>Topic (In unit)</Typography></Box>
                    </Stack>
                    <Stack direction="row" sx={{ mt: 3 }} spacing={2}>
                        <Link href="/en/courses/video/0"><Button endIcon={<PlayCircleOutlineIcon />} sx={{ width: "140px", backgroundColor: "#5c6bc0", border: "2px solid #7986cb", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#3949ab", borderColor: "#3949ab"}}}>Continue</Button></Link>
                        <Button startIcon={<SpeedIcon />} sx={{ width: "150px", backgroundColor: "#26a69a", border: "2px solid #80cbc4", color: "#ffffff", "&.MuiButton-root:hover": {backgroundColor: "#00897b", borderColor: "#00897b"}}} onClick={handleClickOpen}>My Progress</Button>
                    </Stack>
                </Grid>
            </Grid>
    </Box>
    );
}