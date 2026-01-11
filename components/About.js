'use client'
import { Box, Container, Typography, Paper } from '@mui/material'
import { Code, Speed, Lightbulb, CheckCircle } from '@mui/icons-material'

export default function About() {
  const stats = [
    { icon: <Code />, value: '10+', label: 'Years QA Experience' },
    { icon: <Speed />, value: '100%', label: 'Practical Focus' },
    { icon: <Lightbulb />, value: '3', label: 'Active Products' },
  ]

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 3, md: 4 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 1,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          About
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 3,
            maxWidth: 700,
            mx: 'auto',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
          }}
        >
          Real experience. Real solutions. Real impact.
        </Typography>

        {/* Stats */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
            },
            gap: 2,
            mb: 3,
          }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 2,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 8px 24px rgba(8, 145, 178, 0.2)',
                  transform: 'translateY(-4px)',
                  '& .stat-icon': {
                    transform: 'scale(1.1)',
                    backgroundColor: 'secondary.main',
                  },
                },
              }}
            >
              <Box
                className="stat-icon"
                sx={{
                  display: 'inline-flex',
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  mb: 1.5,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {stat.icon}
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 0.5,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: '0.85rem' }}
              >
                {stat.label}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Content */}
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 1.5,
              fontSize: '0.95rem',
              lineHeight: 1.6,
              textAlign: 'center',
            }}
          >
            With years of real-world QA experience, I've worked across manual testing, automation frameworks, and test management systems. I've seen teams struggle with bloated tools, unclear processes, and documentation that doesn't match reality.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 2,
              fontSize: '0.95rem',
              lineHeight: 1.6,
              textAlign: 'center',
            }}
          >
            Panjatan Labs was created to address these pain points. Every tool I build comes from direct experience — from managing test cycles under tight deadlines to debugging flaky automation reports at 2 AM.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              background: 'linear-gradient(135deg, #0891b2 0%, #8b5cf6 100%)',
              color: 'white',
              borderRadius: 3,
              textAlign: 'center',
              mb: 2,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              },
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 32px rgba(8, 145, 178, 0.3)',
                '& .callout-icon': {
                  transform: 'rotate(360deg) scale(1.1)',
                },
              },
            }}
          >
            <CheckCircle
              className="callout-icon"
              sx={{
                fontSize: 40,
                mb: 1.5,
                opacity: 0.9,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              If it doesn't help in real projects, it doesn't ship.
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              textAlign: 'center',
            }}
          >
            This isn't about building the most feature-rich platform. It's about creating tools that solve actual problems, work reliably, and help QA teams deliver with confidence.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}