import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  PaletteMode,
} from '@mui/material';

import cnrsLogo from '../assets/img/cnrs.png';
import logo from '../assets/img/logo.png';

import { Link } from '@tanstack/react-router';
import ToggleColorMode from './ToggleColorMode';

interface AppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppBar({ mode, toggleColorMode }: AppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar position="static" sx={{  bgcolor: 'transparent', top: 'auto', bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 5,
                display: { xs: 'flex', md: 'flex' },
              }}
            >
              <img src={cnrsLogo} alt="CNRS Logo" width="48" />
              <img src={logo} alt="DMPOPIDoR Logo" width="128" style={{ marginLeft: '10px' }} />
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to="/help">Help</Link>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'blue',
              textDecoration: 'none',
            }}
          >
            DMPOPIDoR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="#">
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body1" variant="overline" color="text.primary">
                  Help
                </Typography>
              </MenuItem>
            </Link>

            <Link to="#">
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body1" variant="overline" color="text.primary">
                  Plans & templates
                </Typography>
              </MenuItem>
            </Link>

            <Link to="#">
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body1" variant="overline" color="text.primary">
                  Learn more
                </Typography>
              </MenuItem>
            </Link>
          </Box>

          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

          <Box sx={{ margin: '10px' }}>
            <Link to="/sign-in">Sign in</Link>
          </Box>

          <Box sx={{ margin: '10px' }}>
            <Link to="/sign-up">
              <Button size="small" variant="contained" color="primary">Sign up</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar