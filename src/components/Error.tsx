import * as React from 'react';
import { Box, Button, Container } from '@mui/material';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router'

interface ErrorProps {
  error?: {
    code?: string;
    message?: string;
    error?: string;
    home?: boolean;
  };
  showWarning?: boolean;
  handleClose?: boolean;
}

const ErrorContainer = styled.div`
  font-family: montserrat, sans-serif;
  text-align: center;
`;

const BigText = styled.div`
  font-size: 150px;
  font-weight: 900;
  font-family: sans-serif;
  background: url(https://www.inist.fr/wp-content/uploads/2018/09/012_3132-scaled.jpg) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
`;

const SmallText = styled.div`
  font-family: montserrat, sans-serif;
  color: var(--rust);
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

/**
 * Error component displays an error message and options for handling the error.
 * @param {ErrorProps} props - The props for the Error component.
 * @returns {JSX.Element} - A JSX component displaying the error message and options.
 */
function Error({ error, showWarning = true, handleClose }: ErrorProps): JSX.Element {
  const { t } = useTranslation();
  const defaultMessage = t("It seems that a problem has appeared");
  const errorMessage = error?.message || t("Internal Server Error");
  const errorDescription = error?.error || defaultMessage;
  const home = error?.home !== undefined ? error.home : true;

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ErrorContainer>
          <div className="text-center">
            {showWarning && <BigText>Oops!</BigText>}
            <SmallText>{error?.code || ''} {errorMessage ? `- ${errorMessage}` : ''}</SmallText>
          </div>
          <div>
            <p>{errorDescription}</p>
            {home ? (
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {t("Home page")}
                  </Button>
              </Link>
            ) : (<Button variant="outlined" onClick={handleClose}>{t('Close')}</Button>)}
          </div>
        </ErrorContainer>
      </Box>
    </Container>
  );
}

export default Error;