import { FC } from 'react';
import { Container, Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LinkIconButton } from '../LinkIconButton';

export const Footer: FC = () => {
  return (
    <Box sx={{ borderTop: 1, borderColor: 'divider' }} component="footer">
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          py: 3,
        }}
      >
        <Typography
          variant="body2"
          color="primary"
          sx={{
            display: 'flex',
            flexGrow: { sm: 1 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          Copyright
          <CopyrightIcon fontSize="small" color="inherit" sx={{ mx: 0.3 }} />
          2023 WepApplication.
        </Typography>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <LinkIconButton link="https://uk-ua.facebook.com/">
            <FacebookIcon />
          </LinkIconButton>
          <LinkIconButton link="https://twitter.com/">
            <TwitterIcon />
          </LinkIconButton>
          <LinkIconButton link="https://www.linkedin.com/">
            <LinkedInIcon />
          </LinkIconButton>
          <LinkIconButton link="https://www.instagram.com/">
            <InstagramIcon />
          </LinkIconButton>
        </Box>
      </Container>
    </Box>
  );
};
