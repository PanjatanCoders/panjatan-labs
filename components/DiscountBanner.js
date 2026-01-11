'use client'
import { useState, useEffect } from 'react'
import { Box, Container, Typography, Chip, IconButton } from '@mui/material'
import { LocalOffer, Close } from '@mui/icons-material'
import styles from './DiscountBanner.module.css'

export default function DiscountBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Set discount end date (30 days from now - you can adjust this to your specific date)
  const discountEndDate = new Date('2026-02-10T23:59:59')

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = discountEndDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible || !mounted) return null

  return (
    <Box className={styles.banner}>
      <Container maxWidth="lg">
        <Box className={styles.content}>
          <Box className={styles.left}>
            <LocalOffer className={styles.icon} />
            <Box>
              <Typography variant="h6" className={styles.title}>
                🎉 Limited Time Offer - 40% OFF!
              </Typography>
              <Typography variant="body2" className={styles.subtitle}>
                Get 40% discount on QA Office-Ready Toolkit - Only ₹299!
              </Typography>
            </Box>
          </Box>

          <Box className={styles.timer}>
            <Box className={styles.timeUnit}>
              <Typography variant="h5" className={styles.timeValue}>{timeLeft.days}</Typography>
              <Typography variant="caption" className={styles.timeLabel}>Days</Typography>
            </Box>
            <Typography className={styles.separator}>:</Typography>
            <Box className={styles.timeUnit}>
              <Typography variant="h5" className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</Typography>
              <Typography variant="caption" className={styles.timeLabel}>Hours</Typography>
            </Box>
            <Typography className={styles.separator}>:</Typography>
            <Box className={styles.timeUnit}>
              <Typography variant="h5" className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</Typography>
              <Typography variant="caption" className={styles.timeLabel}>Min</Typography>
            </Box>
            <Typography className={styles.separator}>:</Typography>
            <Box className={styles.timeUnit}>
              <Typography variant="h5" className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</Typography>
              <Typography variant="caption" className={styles.timeLabel}>Sec</Typography>
            </Box>
          </Box>

          <IconButton
            className={styles.closeBtn}
            onClick={() => setIsVisible(false)}
            size="small"
            aria-label="close"
          >
            <Close />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
