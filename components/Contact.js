'use client'
import { Box, Container, Typography, Paper, Stack, Button } from '@mui/material'
import { Email, Phone, LocationOn, WhatsApp } from '@mui/icons-material'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'panjatan.tech@gmail.com',
      href: 'mailto:panjatan.tech@gmail.com',
      color: '#0891b2',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+91 70304 00093',
      href: 'tel:+917030400093',
      color: '#8b5cf6',
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: null,
      color: '#10b981',
    },
  ]

  const whatsappNumber = '917030400093'
  const whatsappMessage = 'Hi! I am interested in your QA tools and would like to know more.'

  return (
    <Box
      component="section"
      id="contact"
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
          Contact
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
          Get in touch for support, inquiries, or collaboration
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          {contactInfo.map((contact, index) => (
            <Paper
              key={index}
              elevation={0}
              component={contact.href ? 'a' : 'div'}
              href={contact.href || undefined}
              sx={{
                p: 2.5,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: contact.href ? 'pointer' : 'default',
                '&:hover': contact.href
                  ? {
                      borderColor: contact.color,
                      boxShadow: `0 8px 24px ${contact.color}33`,
                      transform: 'translateY(-4px)',
                      '& .contact-icon': {
                        transform: 'scale(1.1)',
                        backgroundColor: contact.color,
                      },
                    }
                  : {
                      borderColor: 'divider',
                    },
              }}
            >
              <Box
                className="contact-icon"
                sx={{
                  display: 'inline-flex',
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: contact.color,
                  color: 'white',
                  mb: 1.5,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {contact.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 0.5,
                  fontSize: '0.95rem',
                }}
              >
                {contact.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.85rem',
                  wordBreak: 'break-word',
                }}
              >
                {contact.value}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Box
          sx={{
            mt: 3,
            textAlign: 'center',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              maxWidth: 700,
              mx: 'auto',
              background: 'linear-gradient(135deg, #0891b2 0%, #8b5cf6 100%)',
              color: 'white',
              borderRadius: 3,
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 32px rgba(8, 145, 178, 0.3)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              Ready to improve your QA workflow?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.95,
                fontSize: '0.9rem',
                mb: 2,
              }}
            >
              Reach out to discuss how our tools can help your team work more efficiently
            </Typography>
            <Button
              variant="contained"
              size="large"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<WhatsApp />}
              sx={{
                backgroundColor: '#25D366',
                color: 'white',
                fontWeight: 700,
                py: 1.2,
                px: 3,
                fontSize: '0.95rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: '#128C7E',
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
            >
              Chat on WhatsApp
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
