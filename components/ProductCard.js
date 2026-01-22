'use client'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from '@mui/material'
import {
  CheckCircle,
  ShoppingCart,
  Schedule,
  LocalOffer,
  CardGiftcard,
  MenuBook,
  Download,
} from '@mui/icons-material'

export default function ProductCard({ product }) {
  const {
    name,
    subtitle,
    description,
    status,
    link,
    linkText,
    downloadLink,
    downloadText,
    originalPrice,
    discountPrice,
    discount,
    features,
    isFree,
  } = product

  return (
    <Card
      elevation={2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        border: status === 'live' ? '2px solid' : '1px solid',
        borderColor: status === 'live' ? 'primary.main' : 'divider',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&:hover': {
          transform: status === 'live' ? 'translateY(-12px) scale(1.02)' : 'translateY(-6px)',
          boxShadow: status === 'live' ? '0 20px 40px rgba(8, 145, 178, 0.3)' : '0 10px 20px rgba(0,0,0,0.15)',
          borderColor: status === 'live' ? 'secondary.main' : 'primary.light',
          '& .product-button': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 20px rgba(8, 145, 178, 0.4)',
          },
        },
      }}
    >
      {/* Status Badge */}
      <Chip
        icon={status === 'live' ? <CheckCircle /> : <Schedule />}
        label={status === 'live' ? 'Live Now' : 'Coming Soon'}
        color={status === 'live' ? 'success' : 'default'}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontWeight: 700,
          zIndex: 1,
        }}
      />

      {/* Discount Badge or Free Badge */}
      {isFree ? (
        <Chip
          icon={<CardGiftcard />}
          label="FREE"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            fontWeight: 700,
            zIndex: 1,
            backgroundColor: '#10b981',
            color: 'white',
            animation: 'pulse 2s infinite',
            '& .MuiChip-icon': {
              color: 'white',
            },
          }}
        />
      ) : discount ? (
        <Chip
          icon={<LocalOffer />}
          label={`${discount}% OFF`}
          color="secondary"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            fontWeight: 700,
            zIndex: 1,
            animation: 'pulse 2s infinite',
          }}
        />
      ) : null}

      <CardContent sx={{ flexGrow: 1, pt: 4, pb: 1.5, px: 2.5 }}>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            mb: 0.5,
            fontSize: '1.15rem',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="subtitle2"
          color="primary"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            fontSize: '0.85rem',
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1.5,
            lineHeight: 1.5,
            fontSize: '0.8rem',
          }}
        >
          {description}
        </Typography>

        {/* Pricing */}
        <Box sx={{ mb: 1 }}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            {isFree ? (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: '#10b981',
                  fontSize: '1.75rem',
                }}
              >
                FREE
              </Typography>
            ) : discountPrice ? (
              <>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    fontSize: '1.75rem',
                  }}
                >
                  ₹{discountPrice}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: 'line-through',
                    color: 'text.disabled',
                    fontSize: '1rem',
                  }}
                >
                  ₹{originalPrice}
                </Typography>
              </>
            ) : originalPrice ? (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: 'text.secondary',
                  fontSize: '1.75rem',
                }}
              >
                ₹{originalPrice}
              </Typography>
            ) : null}
          </Stack>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Features */}
        {features && (
          <List dense sx={{ mt: 0.5, mb: 0 }}>
            {features.map((feature, index) => (
              <ListItem key={index} disableGutters sx={{ py: 0.15 }}>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <CheckCircle color="primary" sx={{ fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: 'text.secondary',
                    fontSize: '0.8rem',
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0.5, flexDirection: 'column', gap: 1 }}>
        {downloadLink && (
          <Button
            className="product-button"
            variant="contained"
            fullWidth
            size="medium"
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Download />}
            sx={{
              py: 1.2,
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                transform: 'scale(1.02)',
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            {downloadText}
          </Button>
        )}
        {link ? (
          <Button
            className={downloadLink ? '' : 'product-button'}
            variant={downloadLink ? 'outlined' : 'contained'}
            fullWidth
            size="medium"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={isFree ? <MenuBook /> : <ShoppingCart />}
            sx={{
              py: 1.2,
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              ...(downloadLink
                ? {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'rgba(8, 145, 178, 0.08)',
                    },
                  }
                : {
                    background: isFree
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #0891b2 0%, #8b5cf6 100%)',
                    '&:hover': {
                      background: isFree
                        ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                        : 'linear-gradient(135deg, #0e7490 0%, #7c3aed 100%)',
                    },
                  }),
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            {linkText}
          </Button>
        ) : (
          <Button
            variant="outlined"
            fullWidth
            size="medium"
            disabled
            sx={{
              py: 1.2,
              fontWeight: 700,
              fontSize: '0.9rem',
            }}
          >
            {linkText}
          </Button>
        )}
      </CardActions>
    </Card>
  )
}