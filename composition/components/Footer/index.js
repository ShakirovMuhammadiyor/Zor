import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AdbIcon from '@mui/icons-material/Adb';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Copyright() {
  return (
    <Typography variant="body2" color="#f4f4f4">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box
        component="footer"
        sx={{
          position: "relative",
          marginTop: 15,
          bottom: 0,
          width: "98vw",
          py: 3.5,
          px: 5,
          backgroundColor: "#37474f"
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={13}>
            <Grid item xs={3.5}>
              <Box>
                <Toolbar>
                  <AdbIcon sx={{ color: "#f4f4f4", display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      marginLeft: 1,
                      color: "#f4f4f4",
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 900,
                      letterSpacing: '.4rem',
                      textDecoration: 'none',
                    }}
                  >
                    LOGO
                  </Typography>
                </Toolbar>
              </Box>
              <Container sx={{ marginTop: 1.7 }}>
                <Typography color="#f4f4f4" fontWeight={400}>Astra Security Suite makes security simple and hassle-free for thousands of websites worldwide</Typography>
              </Container>
              <Divider variant="middle" sx={{ marginTop: 3 }} color="#ffffff" />
              <Container sx={{ marginTop: 3.7 }}>
                <Stack direction="row" spacing={3}>
                  <Avatar sx={{ scale: "0.9", backgroundColor: "#f4f4f4" }} variant="rounded">
                    <InstagramIcon sx={{ color: "#37474f" }} />
                  </Avatar>
                  <Avatar sx={{ scale: "0.9", backgroundColor: "#f4f4f4" }} variant="rounded">
                    <FacebookIcon sx={{ color: "#37474f" }} />
                  </Avatar>
                  <Avatar sx={{ scale: "0.9", backgroundColor: "#f4f4f4" }} variant="rounded">
                    <TwitterIcon sx={{ color: "#37474f" }} />
                  </Avatar>
                  <Avatar sx={{ scale: "0.9", backgroundColor: "#f4f4f4" }} variant="rounded">
                    <GitHubIcon sx={{ color: "#37474f" }} />
                  </Avatar>
                </Stack>
                <Typography sx={{ marginTop: 3 }} fontWeight={200} fontSize=".7rem" color="text.secondary">Copyright 2022 Name, Inc. All Right Reserved</Typography>
              </Container>
            </Grid>
            <Grid item xs={8.25}>
              <Stack direction="row" spacing={15}>
                    <Stack spacing={3}>
                      <Typography color="#ffffff" fontWeight={900}>Courses</Typography>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>All Courses</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>My Courses</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Algebra Section</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Geometry Section</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Computer Science</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>English</Link>
                    </Stack>
                    <Stack spacing={3}>
                      <Typography color="#ffffff" fontWeight={700}>Content</Typography>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>All Content</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Science</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Videos</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Articles</Link>
                    </Stack>
                    <Stack spacing={3}>
                      <Typography color="#ffffff" fontWeight={700}>Forum</Typography>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Questions</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Only Answered</Link>
                      <br/>
                      <Typography color="#ffffff" fontWeight={700}>About</Typography>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Contacts</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Media</Link>
                    </Stack>
                    <Stack spacing={3}>
                      <Typography color="#ffffff" fontWeight={700}>FAQ</Typography>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Privacy Policy</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Terms of Service</Link>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Report a vulnerability</Link>
                      <br />
                      <Typography color="#ffffff" fontWeight={700}>Job</Typography>
                      <Link underline="hover" sx={{ fontSize: ".8rem" }}>Vacancies</Link>
                    </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}

//// pink 900, blueGrey 800