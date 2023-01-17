import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import SubjectTabs from './SubjectTabs';
import FilterSwitcher from './FilterSwitcher';


export default function HeadingAndSearchPanel({ subjects, subjectSelected, subjectTabClick }) {
    return (
        <Box sx={{ backgroundColor: "#ffffff", pl: 3, pr: 3 }}>
            <Box sx={{ pt: 8, pb: 8 }}>
                <Typography textAlign="center" sx={{ fontSize: '4rem', fontWeight: 900 }}>Courses</Typography>
            </Box>
            <Grid container>
                <Grid item xs={2} sx={{ display:'flex', justifyContent:'start', alignItems:'center' }}>
                    <Avatar sx={{ scale: "0.9", backgroundColor: "#ffffff" }} variant="rounded"><SearchIcon sx={{ color: "#37474f" }} /></Avatar>
                </Grid>
                <Grid item xs={8} sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <SubjectTabs data={subjects} TabSelected={subjectSelected} handleClick={subjectTabClick} />
                </Grid>
                <Grid item xs={2} sx={{ display:'flex', justifyContent:'end', alignItems:'center' }}>
                    <FilterSwitcher />
                    <GridViewIcon sx={{ '&:hover': {cursor: "pointer"}, marginLeft: 2, color: "#37474f" }} />
                </Grid>
            </Grid>
        </Box>
    );
}