import { Fragment } from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import GetLayout from '../../getLayout';
import CourseHeadingAndTotalStats from './fragments/CourseHeadingAndTotalStats';
import CourseInfoSide from './fragments/CourseInfoSide';
import CourseContent from './fragments/CourseContent';
import { createContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export let CurrentStatus = createContext();

export default function NestedGrid({ status, actions, pagedata, userdata }) {
  return (
    <CurrentStatus.Provider value={{status, actions, pagedata, userdata}}>
      {GetLayout(
      status == 0 ? <Box sx={{ display: 'flex', height: "50vh", alignItems: "center", justifyContent: "center" }}><CircularProgress color="secondary" /></Box> : (
      <Fragment>
      <CourseHeadingAndTotalStats />
      <Grid container>
          <Grid item xs={3.5}>
              <CourseInfoSide />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={8.4}>
              <CourseContent />
          </Grid>
      </Grid>
      </Fragment>)
      , "full")}
    </CurrentStatus.Provider>
  );
}
