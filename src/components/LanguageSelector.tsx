import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@mui/icons-material/Translate'
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface LanguageSelectorProps {
  sx: object;
}

export default function LanguageSelector({ sx }: LanguageSelectorProps) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleSelectLanguage = (lang: string) => {
    i18n.changeLanguage(lang || 'fr')
    handleClose()
  }

  return (
    <Box sx={{ ...sx }}>
      <Tooltip title={t('selectLanguage')}>
        <Button
          id="i18n-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ minWidth: '32px', height: '32px'}}
          startIcon={<TranslateIcon />}
          // endIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
        >
          {i18n.resolvedLanguage?.toUpperCase()}
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => handleSelectLanguage('fr')}
          selected={i18n.resolvedLanguage === 'fr'}
        >{t('languages.french')}</MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage('en')}
          selected={i18n.resolvedLanguage === 'en'}
        >{t('languages.english')}</MenuItem>
      </Menu>
    </Box>
  );
}