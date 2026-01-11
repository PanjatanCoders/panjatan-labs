'use client'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { Rocket, TrendingUp } from '@mui/icons-material'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <Box
      component="section"
      className={styles.hero}
      sx={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f9fafb 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(8, 145, 178, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 4, md: 6 },
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          <Chip
            icon={<TrendingUp />}
            label="40% OFF - Limited Time Offer"
            color="secondary"
            sx={{
              mb: 2,
              fontWeight: 600,
              fontSize: '0.9rem',
              py: 2.5,
              px: 1,
              animation: 'pulse 2s infinite',
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            className={styles.title}
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #0891b2 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Panjatan Labs
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            className={styles.tagline}
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Building practical tools for real-world QA teams
          </Typography>

          <Typography
            variant="body1"
            className={styles.intro}
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              mb: 3,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.7,
            }}
          >
            I design and build tools that help QA professionals work with clarity, confidence, and speed — from documentation to automation reporting.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            className={styles.ctas}
          >
            <Button
              variant="contained"
              size="large"
              href="#products"
              startIcon={<Rocket />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(8, 145, 178, 0.25)',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(8, 145, 178, 0.35)',
                },
              }}
            >
              View Products
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#about"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'rgba(8, 145, 178, 0.04)',
                },
              }}
            >
              About
            </Button>
          </Stack>
        </Box>
      </Container>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </Box>
  )
}