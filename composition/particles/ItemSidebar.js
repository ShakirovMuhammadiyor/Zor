import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import AirplayIcon from '@mui/icons-material/Airplay';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Link from "next/link";

import Image from 'next/image';

function Item ({ type, name, URL, adata }) {
    let Icon = QuizIcon;
    let secondarytext = "";
    let rankIcon = "";

    if (type == "article") {
        Icon = ArticleIcon;
    } else if (type == "video") {
        Icon = AirplayIcon;
    } else if (type == "check") {
        secondarytext = adata.attempted === true ? `Attempted: ${adata.percent}%` : "Not attempted";
        rankIcon = <Avatar variant='rounded' sx={{ width: 30, height: 30, backgroundColor: "#00bcd4" }}><MilitaryTechIcon /></Avatar>
    }
    
    return (
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ pl: 2, pr: 2, pb: 3, pt: 3 }}>
            <Avatar variant="rounded" sx={{ backgroundColor: "#ffffff", color: "#4a4a4a", border: "1px solid #eeeeee", width: 30, height: 30 }}><Icon sx={{ fontSize: "18px" }} /></Avatar>
            <Stack sx={{ flexGrow: 1 }}>
                <Link href={URL} style={{ color: "#4a4a4a", fontSize: "13px" }}>{name}</Link>
                <Typography variant="body2" color="#808080">{secondarytext}</Typography>
            </Stack>
            {rankIcon}
        </Stack>
    );
}

export default function () {
    return (
        <Card sx={{ width: "100%", display: "flex", maxHeight: "0px", minHeight: "100%", flexDirection: "column", borderRadius: 4 }}>
        <CardContent sx={{ flexGrow: 1, p: 0 }}>
            <Box sx={{ pt: 2.5, pb: 2, pl: 2 }}>
                <Stack direction="row" alignItems="center">
                    <Image width={37} height={37} style={{ borderRadius: "100%" }} src="/images/theme.png" />
                    <Stack sx={{ ml: 1.5 }}>
                        <Link href="/en/courses/unit/0" className='under'><Typography variant="h6">Linear equations and inequalities</Typography></Link>
                        <Link href="/en/courses/course/0" className='under'><Typography variant="subtitle2">College Algebra (Unit 1: Lesson 1)</Typography>  </Link>
                    </Stack>
                </Stack>
            </Box>
            <Divider light />
            <Box className="disscroll" sx={{ overflowY: "auto", flexGrow: 1, maxHeight: "0px", minHeight: "87%" }}>
            <Item type="video" name="Equations with parentheses" URL="/en/courses/video/0" adata={{}} />
            <Divider light />
            <Item type="article" name="Multi-step equations review" URL="/en/courses/article/0" adata={{}} />
            <Divider light />
            <Item type="check" name="Number of solutions to equations" URL="/en/courses/check/0" adata={{attempted: false, percent: 0}} />    
            <Divider light />
            <Breadcrumbs separator=">" maxItems={2} sx={{ mt: 1, padding: 2, pl: 4, pr: 4, backgroundColor: "#ffffff" }}>
                <Link className='under' href="/en/courses/all">Math</Link>
                <Link className='under' href="/en/courses/all">Intermediate</Link>
                <Link className='under' href="/en/courses/course/0">College Algebra</Link>
                <Link className='under' href="/en/courses/unit/0">Linear equations and inequalities</Link>
            </Breadcrumbs>
            </Box>
        </CardContent>
        <Divider light />
        <Box sx={{ p: 3, pt: 0, flexShrink: 0 }}>
            <Typography variant="subtitle1" color="#000000" textAlign="center" marginTop="20px">© 2022 Alek's Academy</Typography>
            <Stack direction="row" sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
                <Link color="inherit" variant="subtitle2" className="under" href="/">Terms of use</Link>
                <Link color="inherit" variant="subtitle2" className="under" href="/">Privacy Policy</Link>
                <Link color="inherit" variant="subtitle2" className="under" href="/">Cookie control</Link>
            </Stack>
        </Box>
        </Card>
    );
}