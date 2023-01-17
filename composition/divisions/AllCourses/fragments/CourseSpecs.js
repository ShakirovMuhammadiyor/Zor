import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InlineDot from '../../../particles/InlineDot';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import Link from 'next/link';

export default function CourseSpecs({ coursedata }) {
    let colors = [["#ffc107", "#000000"], ["#673ab7", "#ffffff"]];

    let lang = "en";

    return (
        <Stack spacing={1}>
            <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                    <BookIcon sx={{ fontSize: '13px' }} />
                    <Typography variant="body1">{coursedata.unitsCount} Units</Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                    <AccessTimeIcon sx={{ fontSize: '13px' }} />
                    <Typography variant="body1">{coursedata.EstimatedTime}</Typography>
                </Stack>
            </Stack>
            <Typography>{coursedata.Hashtags.map((hashtag, i) => {
                return i != coursedata.Hashtags.length - 1 ? (<>{hashtag}<InlineDot /></>) : (<>{hashtag}</>);
            })}</Typography>
            <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>{
                coursedata.Contributors.map((contributor, i) => {
                    return (<Link href="/" >
                    <Chip
                        avatar={<Image style={{ borderRadius: "100%" }} width={35} height={35} alt="Remy Sharp" src={`/images/${contributor.picture}`} />}
                        label={contributor.name} size="small" sx={{ backgroundColor: colors[i][0], transition: ".4s", color: colors[i][1], '&:hover': {"& .MuiChip-label": {color: "#000000"}, backgroundColor: "#0000001f"} }}
                    />
                    </Link>);
                })
            }
            </Stack>
        </Stack>
    );
}