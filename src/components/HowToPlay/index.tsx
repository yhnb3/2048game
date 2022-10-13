import styles from './howToPlay.module.scss'

const HowToPlay = () => {
  return (
    <div className={styles.howToPlay}>
      <div className={styles.title}>HOW TO PLAY</div>
      <p className={styles.article}>
        방향키(모바일은 터치 후 드래그)로 타일을 움직일 수 있습니다.
        <br />
        <br />
        타일은 같은 숫자끼리 만나면 합쳐집니다.
        <br />
        <br />
        타일을 합쳐서 2048을 만들어 보세요!
      </p>
    </div>
  )
}

export default HowToPlay
