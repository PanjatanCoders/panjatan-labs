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
          component="h2"
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

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2.5,
            mb: 4,
          }}
        >
          {principles.map((principle, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 0,
                borderRadius: 2.5,
                overflow: 'hidden',
                background: 'white',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: `0 8px 20px ${principle.color}25`,
                  borderColor: principle.color,
                  '& .principle-header': {
                    background: `linear-gradient(135deg, ${principle.color}20 0%, ${principle.color}10 100%)`,
                  },
                  '& .principle-icon': {
                    transform: 'scale(1.1)',
                    boxShadow: `0 6px 16px ${principle.color}30`,
                  },
                },
              }}
            >
              <Box
                className="principle-header"
                sx={{
                  background: `linear-gradient(135deg, ${principle.color}12 0%, ${principle.color}06 100%)`,
                  p: 2.5,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box
                  className="principle-icon"
                  sx={{
                    display: 'inline-flex',
                    p: 1.2,
                    borderRadius: 1.5,
                    backgroundColor: 'white',
                    color: principle.color,
                    mb: 1.5,
                    boxShadow: `0 3px 10px ${principle.color}15`,
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {principle.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    fontSize: '1.05rem',
                    lineHeight: 1.3,
                  }}
                >
                  {principle.title}
                </Typography>
              </Box>
              <Box sx={{ p: 2.5, pt: 2, flexGrow: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                  }}
                >
                  {principle.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

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