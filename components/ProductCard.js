import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const { name, subtitle, description, status, link, linkText } = product
  
  return (
    <div className={styles.card}>
      <span className={`${styles.status} ${status === 'live' ? styles.statusLive : styles.statusComing}`}>
        {status === 'live' ? 'Live' : 'Coming Soon'}
      </span>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>
      
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>
          {linkText}
        </a>
      ) : (
        <button className="btn btn-primary" disabled style={{width: '100%', background: 'var(--border)', color: 'var(--text-light)', cursor: 'not-allowed'}}>
          {linkText}
        </button>
      )}
    </div>
  )
}