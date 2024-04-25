import * as React from 'react';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import hero from '../assets/img/hero.png';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation()

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage: `url(${hero})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '-10px',
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Container
        sx={{
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
              fontWeight: 400,
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            {t('hero.title')}
          </Typography>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            {t('hero.subtitle')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}