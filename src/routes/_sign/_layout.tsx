import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Error from '../../components/Error'
import Copyright from '../../components/Copyright'

export const Route = createRootRoute({
  component: SignLayout,
  notFoundComponent: () => <Error error={{ code: '404', message: 'Page not found', home: true }} />
})

function SignLayout() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
        <Copyright color="primary" sx={{ mt: 4, textAlign: 'center' }} />
      </Box>
    </Container>
  )
}
