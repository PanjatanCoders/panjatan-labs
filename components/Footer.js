import styles from './Footer.module.css'

export default function Footer() {
  const links = [
    { name: 'Products', href: '#products' },
    { name: 'Gumroad', href: 'https://panjatantech.gumroad.com', external: true },
    { name: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { name: 'GitHub', href: 'https://github.com', external: true }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>Panjatan Labs</div>
          <div className={styles.tagline}>Building practical tools for real-world QA teams</div>
          <div className={styles.links}>
            {links.map(link => (
              <a 
                key={link.name}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Panjatan Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}