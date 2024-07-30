import styles from './Firstscreen.module.css'
import stylesButton from './Button.module.css'

export function Firstscreen() {
  return (
    <section className={styles.firstscreen}>
      <div className="container mx-auto px-2">
        <div className={styles.content}>
          <h1>Сериал Ведьмак</h1>
          <p>Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.</p>
          <button className={stylesButton.button}>
            Смотреть сериал
          </button>
        </div>
      </div>
    </section>
  )
}

export default Firstscreen
