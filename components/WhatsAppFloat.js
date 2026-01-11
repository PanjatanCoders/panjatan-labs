'use client'
import { Fab, Tooltip } from '@mui/material'
import { WhatsApp } from '@mui/icons-material'

export default function WhatsAppFloat() {
  const whatsappNumber = '917030400093'
  const whatsappMessage = 'Hi! I am interested in your QA tools and would like to know more.'

  return (
    <Tooltip title="Chat on WhatsApp" placement="left">
      <Fab
        color="primary"
        aria-label="WhatsApp"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          backgroundColor: '#25D366',
          color: 'white',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulse-whatsapp 2s infinite',
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.6)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
          '@keyframes pulse-whatsapp': {
            '0%, 100%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
            '50%': {
              boxShadow: '0 8px 30px rgba(37, 211, 102, 0.6)',
            },
          },
        }}
      >
        <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </Tooltip>
  )
}
