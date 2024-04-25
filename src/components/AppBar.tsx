import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  PaletteMode,
} from '@mui/material';

import ToggleColorMode from './ToggleColorMode';
import LanguageSelector from './LanguageSelector';
import useAppStore from '../store/app';

import cnrsLogo from '../assets/img/cnrs.png';
import logo from '../assets/img/logo.png';

interface AppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppBar({ mode, toggleColorMode }: AppBarProps) {
  const { drawer, toggleDrawer } = useAppStore();
  const { t } = useTranslation();

  return (
    <MuiAppBar position="sticky" sx={{ bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 5,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <img src={cnrsLogo} alt="CNRS Logo" width="48" />
              <img src={logo} alt="App Logo" width="128" style={{ marginLeft: '10px' }} />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => toggleDrawer(!drawer)}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>
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
            }}
          >
            <img src={logo} alt="App Logo" width="128" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/help">
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="button" color="primary">
                  {t('appBar.help')}
                </Typography>
              </MenuItem>
            </Link>

            <Link to="#">
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="button" color="primary">
                {t('appBar.plansAndTemplates')}
                </Typography>
              </MenuItem>
            </Link>

            <Link to="#">
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="button" color="primary">
                  {t('appBar.learnMore')}
                </Typography>
              </MenuItem>
            </Link>
          </Box>

          <Box sx={{ margin: '10px', display: { xs: 'none', md: 'flex' } }}>
            <Link to="/sign-in">
              <Typography color="primary">
                {t('appBar.signIn')}
              </Typography>
            </Link>
          </Box>

          <Box sx={{ margin: '10px', display: { xs: 'none', md: 'flex' } }}>
            <Link to="/sign-up">
              <Button size="small" variant="contained" color="primary">{t('appBar.signUp')}</Button>
            </Link>
          </Box>

          <LanguageSelector sx={{ display: { xs: 'none', md: 'flex' } }} />
          {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} sx={{ display: { xs: 'none', md: 'flex' } }} /> */}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar