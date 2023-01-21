import * as React from 'react';
import { 
    Box, Grid
} from '@mui/material';
import getLayout from '../../getLayout';
import Sidebar from '../../particles/ItemSidebar';
import VideoContent from './fragments/VideoContent';

export default function NestedGrid() {
  return (getLayout(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ height: "100%" }}>
            <Grid item container xs={4} sx={{ p: 4 }}>
                <Sidebar />
            </Grid>
            <Grid item xs={8} sx={{ backgroundColor: "#f4f4f4", pt: 4, pr: 6, pl: 6, pb: 3 }}>
                <VideoContent />
            </Grid>
        </Grid>
    </Box>
  , "header_only"));
}
