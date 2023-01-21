import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import getLayout from '../../getLayout';
import Sidebar from '../../particles/ItemSidebar';
import MainContent from './fragments/MainContent';

export default function NestedGrid() {
  return (getLayout(
    <Box sx={{ flexGrow: 1 }}>
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
        <Grid container sx={{ height: "100%" }}>
            <Grid item container xs={4} sx={{ padding: 4 }}>
              <Sidebar />
            </Grid>
            <Grid item xs={8} sx={{ backgroundColor: "#f4f4f4", width: "100%", overflow: "auto", display: "flex", flexDirection: "column", minHeight: "0px", maxHeight: "100%"}}>
              <MainContent />
            </Grid>
        </Grid>
    </Box>
  , "header_only"));
}
