import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className={styles.content}>
          <p>
            With years of real-world QA experience, I've worked across manual testing, automation frameworks, and test management systems. I've seen teams struggle with bloated tools, unclear processes, and documentation that doesn't match reality.
          </p>
          <p>
            Panjatan Labs was created to address these pain points. Every tool I build comes from direct experience — from managing test cycles under tight deadlines to debugging flaky automation reports at 2 AM.
          </p>
          <div className={styles.highlight}>
            If it doesn't help in real projects, it doesn't ship.
          </div>
          <p>
            This isn't about building the most feature-rich platform. It's about creating tools that solve actual problems, work reliably, and help QA teams deliver with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}