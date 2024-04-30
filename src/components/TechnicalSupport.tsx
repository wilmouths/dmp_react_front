import * as React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuildIcon from '@mui/icons-material/Build';
import { useTranslation } from 'react-i18next';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  position: 'fixed',
  right: 0,
  top: '50%',
  color: 'white',
  width: '100px',
  height: '100px',
  padding: '20px',
  boxSizing: 'border-box',
  borderRadius: '8px 0 0 8px',
  zIndex: 5,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  }
}));

function TechnicalSupport() {
  const { t } = useTranslation();

  return (
    <StyledButton href="/contact-us">
      <div style={{ textTransform: 'none', textAlign: 'center' }}>
        <BuildIcon style={{ fontSize: '24px' }} />
        <Typography variant="button" gutterBottom>
         {t('technicalSupport')}
        </Typography>
      </div>
    </StyledButton>
  );
}

export default TechnicalSupport;