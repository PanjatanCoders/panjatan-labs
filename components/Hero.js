import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>Panjatan Labs</h1>
        <p className={styles.tagline}>Building practical tools for real-world QA teams</p>
        <p className={styles.intro}>
          I design and build tools that help QA professionals work with clarity, confidence, and speed — from documentation to automation reporting.
        </p>
        <div className={styles.ctas}>
          <a href="#products" className="btn btn-primary">View Products</a>
          <a href="#about" className="btn btn-secondary">About</a>
        </div>
      </div>
    </section>
  )
}