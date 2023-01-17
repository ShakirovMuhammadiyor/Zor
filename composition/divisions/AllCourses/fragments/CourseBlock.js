import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import RemoveIcon from '@mui/icons-material/Remove';
import CourseSpecs from './CourseSpecs';
import Skeleton from '@mui/material/Skeleton'; 
import {red, lightGreen, blueGrey} from '@mui/material/colors';
import { useRouter } from 'next/router';
import getLanguage from '../../../getLanguage';
import { useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CourseBlock ({ courseData, subscribe, isUserSubscribed }) {
    let getSxForButton = (color, rotate) => {
      return {display: "inline-flex", transition: '.3s', "&.MuiChip-root:hover": {backgroundColor: color["600"], borderColor: color["600"], '& .MuiChip-avatar': {transform: rotate ? "rotate(180deg)" : ""}}, "& .MuiChip-label": {ml: -0.5}, "& .MuiChip-avatar": { transition: '.3s', color: "#ffffff" }, backgroundColor: color["400"], border: "2px solid " + color["200"], color: "#ffffff", ml: 1, pr: 0.5, pl: 0.5}
    }

    let [showWarning, setShowWarning] = useState(false);

    let router = useRouter();

    let lang = getLanguage();

    let ActionButton;

    if (isUserSubscribed == true) {
      if (showWarning) {
        ActionButton = <>
            <Chip
              label="No, keep" onClick={() => setShowWarning(false)}
              sx={getSxForButton(blueGrey)} avatar={<UndoIcon sx={{ scale: '0.8' }} />}
            />
            <Chip
              label="Continue (Personal data will be deleted)" onClick={() => subscribe(-1, courseData.id)}
              sx={getSxForButton(red)} avatar={<DeleteIcon sx={{ scale: '0.7' }} />}
            /> 
        </>
      } else {
        ActionButton = <Chip
          label="Unsubscribe" onClick={() => setShowWarning(true)}
          sx={getSxForButton(red, 1)} avatar={<RemoveIcon sx={{ scale: '0.8' }} />}
        />;
      }
      
    } else if (isUserSubscribed == false) {
      ActionButton = <Chip 
        label="Subscribe" onClick={() => subscribe(1, courseData.id)}
        sx={getSxForButton(lightGreen, 1)} avatar={<AddIcon sx={{ scale: '0.8' }} />} 
      />
    } else {
      ActionButton = <Skeleton width={120} variant="rounded" animation="wave"><Chip/></Skeleton>
    }
  
    return (
          <Card sx={{ scale: '0.86', backgroundColor: "#f9f9f9", transition: '.1s', borderRadius: 1.5, p: 1.2, boxShadow: "1px 1px 2px 2px #808080 !important", "&:hover": {backgroundColor: "#ffffff", boxShadow: "3px 3px 2px 4px #808080 !important"}}}>
              <CardContent>
                <Link className="under" href={`/[lang]/courses/course/[cid]`} as={`/${lang}/courses/course/${courseData.id}`}><Typography fontWeight={600} lineHeight={1.5} color="#37474f" variant="h6">
                  {courseData.name}
                </Typography></Link>
                  <Grid container spacing={0} sx={{ mt: 3 }}>
                      <Grid item xs={10}><CourseSpecs coursedata={courseData} /></Grid>
                      <Grid item xs={2}><Link href={`/[lang]/courses/course/[cid]`} as={`/${lang}/courses/course/${courseData.id}`}><Image style={{ borderRadius: "100%" }} width={52} height={52} alt="Remy Sharp" src={`/images/${courseData.picture}`} /></Link></Grid>
                  </Grid>
              </CardContent>
              <Divider variant="middle" />
              <CardActions sx={{ mt: 1 }}>
                <Grid container justifyContent="flex-end">{ActionButton}</Grid>
              </CardActions>
          </Card>
    );
  }