import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { CurrentStatus } from '..';
import Tooltip from '@mui/material/Tooltip';

import Link from 'next/link';
import Image from 'next/image';

function Unit ({ id, picture, name, stats, topics }) {
    // let full = useContext(CurrentStatus);

    // let stat = <Tooltip title="Sign in to get access" followCursor>
    // <Stack sx={{ mr: 4 }} spacing={1}>
    //     <Typography textAlign="right">Loading...</Typography>
    //     <LinearProgress sx={{ width: "200px" }} color="secondary" />
    // </Stack>
    // </Tooltip>

    // if (full.status === 1) {
    //     stat = <Tooltip title="Sign in to get access" followCursor>
    //     <Stack sx={{ mr: 4 }} spacing={1}>
    //         <Typography textAlign="right">0/{stats.total} Mastery points</Typography>
    //         <LinearProgress value={0} variant="determinate" sx={{ width: "200px" }} color="secondary" />
    //     </Stack>
    //     </Tooltip>
    // } else if (full.status === 3) {
    //     if (full.userdata.subscribed === true) {
    //         stat = <Stack sx={{ mr: 4 }} spacing={1}>
    //             <Typography textAlign="right">{stats.current}/{stats.total} Mastery points</Typography>
    //             <LinearProgress value={stats.current} variant="determinate" sx={{ width: "200px" }} color="secondary" />
    //         </Stack>
    //     } else if (full.userdata.subscribed === false) {
    //         bbutton = <Tooltip title="Subscribe to get access" followCursor>
    //             <Stack sx={{ mr: 4 }} spacing={1}>
    //                 <Typography textAlign="right">0/{stats.total} Mastery points</Typography>
    //                 <LinearProgress value={0} variant="determinate" sx={{ width: "200px" }} color="secondary" />
    //             </Stack>
    //         </Tooltip>
    //     }
    // }

    return (
        <Accordion sx={{ '&:before': {display: "none"}, borderRadius: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
                    <Image width={35} height={35} style={{ borderRadius: "100%" }} src={`/images/${picture}`} />
                    <Link href="/en/courses/unit/[id]" as={`/en/courses/unit/${id}`}><Typography>{name}</Typography></Link>
                </Stack>
                <Tooltip title="Sign in to get access" followCursor>
                <Stack sx={{ mr: 4 }} spacing={1}>
                    <Typography textAlign="right">{stats.current}/{stats.total} Mastery points</Typography>
                    <LinearProgress value={70} variant="determinate" sx={{ width: "200px" }} color="secondary" />
                </Stack>
                </Tooltip>
            </AccordionSummary>
            <Divider variant="middle" sx={{ mt: -0.5 }} />
            <AccordionDetails>
                <Grid container sx={{ pl: 1, pt: 1 }} rowSpacing={2}>
                    {topics.map((topic, i) => {
                        return (
                            <Grid item xs={4}>
                                <Stack direction="row" spacing={1}>
                                    <Link className='under' href="/en/courses/unit/[id]" as={`/en/courses/unit/${id}#${topic.position}`}>{topic.name}</Link>
                                    {topic.status == 1 && (<DoneAllIcon fontSize="small" />)}
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}


export default function CourseContent () {
    return (
        <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
            <Stack spacing={4}>
                <Unit id={0} picture="theme.png" name="Linear equations and inequalities" stats={{current: 0, total: 1200 }}
                    topics={[{id: 0, status: 0, position: 0, name: "Solving equations with one unknown"}]}
                />
            </Stack>
        </Container>
    );
}