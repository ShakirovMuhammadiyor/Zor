import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import getLayout from '../../getLayout';
import HeadingAndStats from './fragments/HeadingAndStats';
import RankingSide from './fragments/RankingSide';
import UnitContent from './fragments/UnitContent';
import UserLogDialog from './fragments/UserLogDialog';


export default function NestedGrid() {
  return (getLayout(
    <Fragment>
    <HeadingAndStats />
    <Box>
        <Grid container>
            <Grid item xs={3.5}>
                <RankingSide />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={8.4}>
                <UnitContent />
            </Grid>
        </Grid>
    </Box>
    <UserLogDialog />
    </Fragment>
  , "full"));
}
