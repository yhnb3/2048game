import cx from 'classnames'

import styles from './gameover.module.scss'

interface IProps {
  isGameOver: boolean
  startNewGame: () => void
}

const Gameover = ({ isGameOver, startNewGame }: IProps) => {
  return (
    <div data-testid='gameover' className={cx(styles.gameover, { [styles.show]: isGameOver })}>
      <div className={styles.title}>Game Over</div>
      <button type='button' className={styles.button} onClick={startNewGame}>
        Try Again
      </button>
    </div>
  )
}

export default Gameover
