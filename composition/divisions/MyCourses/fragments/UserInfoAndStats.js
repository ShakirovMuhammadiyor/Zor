import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import Image from 'next/image';

import NearMeIcon from '@mui/icons-material/NearMe';

export default function () {
    return (
    <Box sx={{ backgroundColor: "#f4f4f4" }}>
        <Box sx={{ pt: 5, pb: 5, pl: 8, pr: 8 }}>
            <Grid container>
                <Grid container item xs={6}>
                    <Stack direction="row" spacing={2.8}>
                        <Image width={85} height={85} style={{ borderRadius: 6 }} src="/images/user.png" />
                        <Stack spacing={0}>
                            <Typography marginBottom={0.2} fontSize="24px" fontWeight={700}>Shakirov Muhammadiyor</Typography>
                            <Typography gutterBottom>@Shokirov - Counter Strike: Global Offensive</Typography>
                            <Box sx={{ marginTop: 0.2 }}>
                                <NearMeIcon fontSize="10px" sx={{ marginRight: 0.2 }} />
                                <Typography display="inline">Student in Muhammad Al-Khwarizmi school</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid container item xs={6} alignItems="flex-end" flexDirection="column">
                    <Stack direction="row">
                        <Typography display="inline" marginBottom={0.2} fontSize="24px" fontWeight={700}>Level: </Typography>
                        <Avatar sx={{ bgcolor: "#ad1457", color: "#ffffff", width: 37, height: 37, ml: 1, fontWeight: 900, fontSize: '17px' }}>4</Avatar>
                    </Stack>
                    <Stack direction="row" spacing={1.5} sx={{ mt: 1.4, mb: 2 }}>
                        <Chip size="small" label="120000" sx={{ backgroundColor: "#c51162", color: "#ffffff" }} />
                        <Chip variant="outlined" size="small" label="1" avatar={<Image width={18} height={18} src="/images/rank1.png" />} />
                        <Chip variant="outlined" size="small" label="2" avatar={<Image width={18} height={18} src="/images/rank2.png" />} />
                        <Chip variant="outlined" size="small" label="8" avatar={<Image width={18} height={18} src="/images/rank3.png" />} />
                        <Chip variant="outlined" size="small" label="3" avatar={<Image width={18} height={18} src="/images/rank1.png" />} />
                    </Stack>
                    <ButtonGroup size="small" disableElevation variant="outlined" color="secondary">
                        <Button>Progress</Button>
                        <Button>Teachers</Button>
                        <Button>Edit Profile</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Box>
    </Box>
    );
}