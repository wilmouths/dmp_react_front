import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface CopyrightProps {
  color?: string;
  sx?: object;
}

const Copyright: React.FC<CopyrightProps> = ({ color, sx }) => {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      sx={sx}
    >
      <Typography variant="body1" color={{ color: color || 'white' }}>
        <div>
          DMPOPIDoR <Link
            href="https://github.com/OPIDoR/DMPOPIDoR/releases/tag/V4.0.0"
            target="_blank"
            underline="none"
            style={{ color: color || 'white' }}
          >V4.0.0
          </Link>
        </div>
        <div>
         © 2016 - {new Date().getFullYear()} <Link
            href="https://www.inist.fr/"
            target="_blank"
            underline="none"
            style={{ color: color || 'white' }}
          >Inist-CNRS</Link>
        </div>
      </Typography>
    </Box>
  );
};

export default Copyright
