'use client'
import { Box, Container, Typography, Grid } from '@mui/material'
import ProductCard from './ProductCard'
import { products } from '@/data/products'

export default function Products() {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: 'white',
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
          Products
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
          Practical tools built for modern QA workflows
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 3,
            width: '100%',
          }}
        >
          {products.map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}