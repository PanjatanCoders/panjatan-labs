'use client'
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from '@mui/material'
import {
  Code,
  ShoppingBag,
  LinkedIn,
  GitHub,
  Email,
  Favorite,
} from '@mui/icons-material'

export default function Footer() {
  const productLinks = [
    { name: 'QA Office-Ready Toolkit', href: '#products' },
    { name: 'Pramana Manager', href: '#products' },
    { name: 'Pramana Reporter', href: '#products' },
  ]

  const socialLinks = [
    { name: 'Gumroad', href: 'https://panjatantech.gumroad.com', icon: <ShoppingBag /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedIn /> },
    { name: 'GitHub', href: 'https://github.com', icon: <GitHub /> },
  ]

  const companyLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
        pt: 5,
        pb: 3,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Code sx={{ fontSize: 32, color: 'primary.light' }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #06b6d4 0%, #a78bfa 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Panjatan Labs
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 3,
                maxWidth: 300,
              }}
            >
              Building practical tools for real-world QA teams. Simplicity, clarity, and focus.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      color: 'primary.light',
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(8, 145, 178, 0.1)',
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Products */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Products
            </Typography>
            <Stack spacing={1.5}>
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  underline="hover"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.light',
                      pl: 0.5,
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Company
            </Typography>
            <Stack spacing={1.5}>
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  underline="hover"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.light',
                      pl: 0.5,
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter/CTA */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Stay Updated
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
              }}
            >
              Get notified about new products and updates.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',
            }}
          >
            © {new Date().getFullYear()} Panjatan Labs. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            Built with <Favorite sx={{ fontSize: 16, color: '#ef4444' }} /> for QA professionals
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}