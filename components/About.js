'use client'
import { Box, Container, Typography, Paper, Grid } from '@mui/material'
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
        py: { xs: 4, md: 6 },
        backgroundColor: 'background.paper',
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
          About
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
          Real experience. Real solutions. Real impact.
        </Typography>

        {/* Stats */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 12px 32px rgba(8, 145, 178, 0.2)',
                    transform: 'translateY(-6px) scale(1.03)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Content */}
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 2,
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            With years of real-world QA experience, I've worked across manual testing, automation frameworks, and test management systems. I've seen teams struggle with bloated tools, unclear processes, and documentation that doesn't match reality.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 3,
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            Panjatan Labs was created to address these pain points. Every tool I build comes from direct experience — from managing test cycles under tight deadlines to debugging flaky automation reports at 2 AM.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #0891b2 0%, #8b5cf6 100%)',
              color: 'white',
              borderRadius: 3,
              textAlign: 'center',
              mb: 3,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              },
            }}
          >
            <CheckCircle sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                position: 'relative',
                zIndex: 1,
              }}
            >
              If it doesn't help in real projects, it doesn't ship.
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            This isn't about building the most feature-rich platform. It's about creating tools that solve actual problems, work reliably, and help QA teams deliver with confidence.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}