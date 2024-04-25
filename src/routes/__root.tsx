import * as React from 'react'
import { Outlet, createRootRoute, useRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '../components/AppBar'
import Error from '../components/Error'
import { PaletteMode } from '@mui/material';
import Hero from '../components/Hero';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <Error error={{ code: '404', message: 'Page not found', home: false }} />,
})

const hideAppBarRoutes = ['sign-up', 'sign-in']

function RootComponent() {
  const route = useRouter();
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const currentRoute = route.latestLocation.pathname.length > 1
    ? route.latestLocation.pathname.substring(1)
    : route.latestLocation.pathname

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#172849',
        light: '#2c7dad',
      },
      secondary: {
        main: '#c6503d',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!hideAppBarRoutes.includes(currentRoute) && <AppBar mode={mode} toggleColorMode={toggleColorMode} />}
      {!hideAppBarRoutes.includes(currentRoute) && currentRoute === '/' && <Hero />}
      {!hideAppBarRoutes.includes(currentRoute) && <Drawer />}
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Outlet />
          <TanStackRouterDevtools position="bottom-right" />
        </Box>
      </Container>
      {!hideAppBarRoutes.includes(currentRoute) && <Footer />}
    </ThemeProvider>
  )
}
