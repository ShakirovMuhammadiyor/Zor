import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { pink } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from './train';
import LinearProgress from '@mui/material/LinearProgress';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CSSTransition } from "react-transition-group";
import useSWR from 'swr';

import { createTheme, ThemeProvider, styled, alpha } from '@mui/material/styles';
import Image from 'next/image';

const n = 0;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.other.main, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.other.main, 1),
    },
    marginLeft: 0,
    width: '200%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '17ch',
        '&:focus': {
          width: '25ch',
        },
      },
    },
  }));

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({ username }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  let { data: user, isLoading } = useSWR('userdata');

  return (
    <AppBar position="sticky" sx={{ borderBottom: '1px solid #f4f4f4' }}>
      <LinearProgress sx={{ height: "6px" }} variant="determinate" color="secondary" value={100} />
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ color: "#37474f", display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              marginLeft: 1,
              color: "#37474f",
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.4rem',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Search>
                <SearchIconWrapper>
                <SearchIcon sx={{ color: "#37474f" }} />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          </Box>

          <Box sx={{ mr: 3 }}>
            <ToggleButton />
          </Box>

          <CSSTransition in={typeof user != "undefined"} timeout={300} classNames="tab" unmountOnExit>
          <Box sx={{ flexGrow: 0 }}>
            {(user && user.usertype == "guest") && (
              <Button size='large' sx={{"&:hover": {backgroundColor: "#37474f"}, backgroundColor: "#546e7a", borderRadius: 1.5, pr: 2, pl: 2}}>SIGN IN</Button>
            )}
            <Tooltip title="Open settings">
                  <Button onClick={(event) => {setAnchorElUser(event.currentTarget)}} sx={{"&:hover": {backgroundColor: "#f4f4f4"}, ml: 4, backgroundColor: (Boolean(anchorElUser) ? "#f4f4f4" : "#ffffff"), p: 0, "& .MuiButton-endIcon": { marginLeft: 2 }, padding: "5px 17px", borderRadius: 1.5}} endIcon={<Image style={{ borderRadius: "100%" }} width={35} height={35} alt="Remy Sharp" src="/images/user.png" />}>
                    <Typography sx={{color: "#880e4f", fontWeight: 700, transition: '0.5s'}}>{typeof user != "undefined" ? user.name : ""}</Typography>
                  </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => {setAnchorElUser(null)}}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {setAnchorElUser(null)}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </CSSTransition>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;