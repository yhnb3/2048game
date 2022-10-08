import styles from './header.module.scss'

interface IProps {
  score: number
  maxScore: number
}

const Header = ({ score, maxScore }: IProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>2048</div>
      <div className={styles.scoreBoard}>
        <div className={styles.scoreBox}>
          <div className={styles.scoreTitle}>SCORE</div>
          <div className={styles.score}>{score}</div>
        </div>
        <div className={styles.scoreBox}>
          <div className={styles.scoreTitle}>BEST</div>
          <div className={styles.score}>{maxScore}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
