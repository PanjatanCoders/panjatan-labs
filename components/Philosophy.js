import styles from './Philosophy.module.css'

export default function Philosophy() {
  const principles = [
    {
      title: 'Simplicity over complexity',
      description: 'Tools should reduce cognitive load, not add to it. Every feature must justify its existence.'
    },
    {
      title: 'Real workflows over ideal workflows',
      description: "Teams don't work in textbook scenarios. Tools should adapt to how people actually work, not force them into rigid processes."
    },
    {
      title: 'Clarity over feature overload',
      description: 'A tool that does three things well beats one that does twenty things poorly. Focus enables excellence.'
    }
  ]

  return (
    <section id="philosophy">
      <div className="container">
        <h2 className="section-title">Philosophy</h2>
        <div className={styles.content}>
          <div className={styles.principles}>
            {principles.map((principle, index) => (
              <div key={index} className={styles.principle}>
                <strong>{principle.title}</strong>
                {principle.description}
              </div>
            ))}
          </div>
          <div className={styles.closing}>
            The goal is not to impress. The goal is to help teams ship with confidence.
          </div>
        </div>
      </div>
    </section>
  )
}