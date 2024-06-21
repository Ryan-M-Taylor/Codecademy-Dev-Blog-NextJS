import styles from './Footer.module.css'
import {spaceMono, nunito} from './fonts'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={spaceMono.className}>
          Codecademy <span className={styles.accent}>&lt;Dev&gt;</span> Blog
        </h3>
        <h4 className={nunito.className}>
          Like what you're reading? Subscribe to our newsletter!
        </h4>
        <form>
          <input
            className={styles.input}
            type="text"
            placeholder="email"
          ></input>
          <button className={styles.button} type="button">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}
