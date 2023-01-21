import ItemSidebar from '../../particles/ItemSidebar';
import ArticleContent from './fragments/ArticleContent';
import getLayout from '../../getLayout';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function NestedGrid() {
  return (getLayout(
    <Box sx={{ flexGrow: 1}}>
        <Grid container sx={{ height: "100%", overflowY: "hidden" }}>
            <Grid item container xs={4} sx={{ p: 4 }}>
              <ItemSidebar />
            </Grid>
            <Grid item xs={8} sx={{ backgroundColor: "#f4f4f4", overflow: "auto", flexDirection: "column", maxHeight: "0px", minHeight: "100%", pt: 4, pr: 7, pl: 7, "&::-webkit-scrollbar": {display: "none"}  }}>
            <ArticleContent />
            </Grid>
        </Grid>
    </Box>
  , "header_only"));
}
