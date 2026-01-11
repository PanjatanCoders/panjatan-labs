'use client'
import { Box, Container, Typography, Paper, Grid, Chip } from '@mui/material'
import {
  AutoAwesome,
  Groups,
  Visibility,
  EmojiEvents,
} from '@mui/icons-material'

export default function Philosophy() {
  const principles = [
    {
      icon: <AutoAwesome />,
      title: 'Simplicity over complexity',
      description: 'Tools should reduce cognitive load, not add to it. Every feature must justify its existence.',
      color: '#0891b2',
    },
    {
      icon: <Groups />,
      title: 'Real workflows over ideal workflows',
      description: "Teams don't work in textbook scenarios. Tools should adapt to how people actually work, not force them into rigid processes.",
      color: '#8b5cf6',
    },
    {
      icon: <Visibility />,
      title: 'Clarity over feature overload',
      description: 'A tool that does three things well beats one that does twenty things poorly. Focus enables excellence.',
      color: '#10b981',
    },
  ]

  return (
    <Box
      component="section"
      id="philosophy"
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 1.5,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Philosophy
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 4,
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          Principles that guide every product we build
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {principles.map((principle, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: principle.color,
                    transform: 'translateY(-10px) scale(1.03)',
                    boxShadow: `0 16px 40px ${principle.color}30`,
                    '& .principle-icon': {
                      transform: 'scale(1.2) rotate(8deg)',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: principle.color,
                  },
                }}
              >
                <Box
                  className="principle-icon"
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: `${principle.color}15`,
                    color: principle.color,
                    mb: 3,
                    transition: 'all 0.3s',
                  }}
                >
                  {principle.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {principle.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                  }}
                >
                  {principle.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Closing Statement */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
            color: 'white',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <EmojiEvents
            sx={{
              fontSize: 56,
              mb: 2,
              opacity: 0.2,
              position: 'absolute',
              top: 20,
              right: 40,
            }}
          />
          <Chip
            label="Our Mission"
            sx={{
              mb: 3,
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              color: '#a78bfa',
              fontWeight: 700,
              border: '1px solid #a78bfa',
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              position: 'relative',
              zIndex: 1,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            The goal is not to impress.
            <br />
            The goal is to help teams ship with confidence.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}