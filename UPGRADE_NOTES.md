# Panjatan Labs - Material Design Upgrade

## What's New

Your website has been upgraded to production-ready Material Design with the following improvements:

### 1. **Sticky Discount Banner with Live Countdown**
   - 30% OFF promotion banner at the top
   - Real-time countdown timer (Days:Hours:Minutes:Seconds)
   - Set to expire on February 10, 2026
   - Closeable by users
   - Eye-catching gradient design with animations

### 2. **Material Design UI Components**
   - Professional Material-UI (MUI) components throughout
   - Consistent design language and spacing
   - Enhanced typography and color palette
   - Smooth animations and transitions
   - Responsive design for all devices

### 3. **Enhanced Navigation**
   - Sticky navigation bar with blur effect
   - Mobile-responsive hamburger menu
   - Smooth scroll to sections
   - Professional branding with icons

### 4. **Improved Product Cards**
   - Prominent discount badges (30% OFF)
   - Before/after pricing display ($49 → $34)
   - Feature lists with checkmarks
   - Status indicators (Live/Coming Soon)
   - Hover animations and elevation
   - Call-to-action buttons with icons

### 5. **Upgraded Sections**
   - **Hero**: Gradient text, pulsing discount chip, modern layout
   - **About**: Stats cards, gradient highlight box, better readability
   - **Products**: Material cards with pricing and features
   - **Philosophy**: Icon-based principle cards with hover effects
   - **Footer**: Multi-column layout with social links, dark gradient background

### 6. **User Experience**
   - Smooth scroll behavior between sections
   - Hover effects on all interactive elements
   - Professional animations and transitions
   - Loading states ready for implementation
   - Mobile-first responsive design

## Customization

### Update Discount End Date
Edit `components/DiscountBanner.js` line 11:
```javascript
const discountEndDate = new Date('2026-02-10T23:59:59')
```

### Adjust Pricing
Edit `data/products.js`:
```javascript
originalPrice: 49,    // Original price
discountPrice: 34,    // Discounted price
discount: 30,         // Discount percentage
```

### Modify Color Theme
Edit `app/theme.js` to customize colors:
```javascript
primary: {
  main: '#0891b2',    // Cyan
  light: '#06b6d4',
  dark: '#0e7490',
}
```

### Social Media Links
Update in `components/Footer.js`:
```javascript
{ name: 'LinkedIn', href: 'https://linkedin.com/your-profile', icon: <LinkedIn /> }
{ name: 'GitHub', href: 'https://github.com/your-profile', icon: <GitHub /> }
```

## Running the Site

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

## Next Steps

1. **Replace placeholder links** - Update social media URLs in Footer
2. **Test discount banner** - Verify countdown timer works correctly
3. **Review pricing** - Ensure all prices are accurate
4. **Mobile testing** - Test on various device sizes
5. **SEO optimization** - Add meta tags and descriptions
6. **Analytics** - Consider adding Google Analytics or similar

## Technical Stack

- **Next.js 16** - React framework
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling
- **React 19** - Latest React version

## Support

For issues or questions:
- Check MUI documentation: https://mui.com
- Next.js docs: https://nextjs.org/docs

---

Built with Material Design principles for a modern, production-ready website.
