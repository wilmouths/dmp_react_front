import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import XIcon from '@mui/icons-material/X';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from '@tanstack/react-router';
import GitHubIcon from '@mui/icons-material/GitHub';

import roadmapLogo from '../assets/img/roadmap_logo_orange_white.png'
import logoWhite from '../assets/img/logo_white.png'
import opidorLogoWhite from '../assets/img/opidor_logo_white.png'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation()

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: (theme) => theme.palette.primary.dark,
        py: { xs: 1, sm: 5 },
        marginTop: '150px',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '60%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            width: '20%',
          }}
        >
          <img src={logoWhite} alt="DMPOPIDoR Logo" height="84" />
          <div>{t('footer.description')}</div>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {t('footer.navigation')}
          </Typography>
          <Link to="/help" style={{ color: 'white' }}>
            {t('menu.help')}
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            {t('menu.dmpTemplates')}
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            {t('news.title')}
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            FAQ
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            {t('menu.contactUs')}
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            {t('menu.apiDocumentation')}
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {t('footer.about')}
          </Typography>
          <Link to="#" style={{ color: 'white' }}>
            {t('footer.about')}
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            {t('menu.termsOfUse')}
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            {t('menu.privacyStatement')}
          </Link>
          <Link from="https://github.com/OPIDoR/DMPOPIDoR" target="_blank" style={{ color: 'white' }}>
            Github <GitHubIcon fontSize="small" />
          </Link>
          <Link to="#" style={{ color: 'white' }}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h5" fontWeight={600} gutterBottom>
          {t('footer.ecosystem')}
          </Typography>
          <Link from="https://opidor.fr/" style={{ color: 'white' }}>
          <img src={opidorLogoWhite} alt="OPIDoR" height="84" />
          </Link>
        </Box>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: (theme) => theme.palette.primary.main,
        px: { xs: 1, sm: 28 },
        py: { xs: 1, sm: 2 },
      }}
    >
      <Copyright />
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
      >
        <IconButton aria-label="X" href="https://twitter.com/OPIDoR_INIST" target="_blank" style={{ color: 'white' }}>
          <XIcon size="small" />
        </IconButton>
        <IconButton aria-label="Contact" href="https://listes.services.cnrs.fr/wws/info/dmpopidor" target="_blank" style={{ color: 'white' }}>
          <ForumIcon size="small" />
        </IconButton>
        <IconButton aria-label="X" href="https://github.com/DMPRoadmap/roadmap" target="_blank" style={{ color: 'white' }}>
          <img src={roadmapLogo} alt="roadmap logo" height="32" style={{ marginLeft: '10px' }} />
        </IconButton>
      </Stack>
    </Box>
  </>
  );
}