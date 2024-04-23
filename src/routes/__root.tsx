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

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <Error error={{ code: '404', message: 'Page not found', home: false }} />,
})

const hideAppBarRoutes = ['sign-up', 'sign-in']

function RootComponent() {
  const route = useRouter();
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const currentRoute = route.latestLocation.pathname.substring(1);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#2c7dad',
        light: '#172849',
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
      {!hideAppBarRoutes.includes(currentRoute) && <Hero />}
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
    </ThemeProvider>
  )
}
