import styles from './startBox.module.scss'

interface IProps {
  startNewGame: () => void
}

const StartBox = ({ startNewGame }: IProps) => {
  return (
    <div className={styles.startBox}>
      <div className={styles.startLeft} />
      <div className={styles.startRight}>
        <button type='button' className={styles.startButton} onClick={startNewGame}>
          NEW GAME
        </button>
      </div>
    </div>
  )
}

export default StartBox
