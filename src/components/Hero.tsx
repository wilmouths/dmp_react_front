import * as React from 'react';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import hero from '../assets/img/hero.png';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
        backgroundImage: `url(${hero})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 12, sm: 14 },
          pb: { xs: 12, sm: 14 },
        }}
      >
        <Stack spacing={5} useFlexGap sx={{ mx: 0, width: { xs: '100%', sm: '100%' } }}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Bien décrire la vie de vos données pour leur assurer un futur
          </Typography>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            DMP OPIDoR, un outil et un accompagnement actifs pour planifier la gestion de vos données en harmonie avec les pratiques de votre communauté
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}