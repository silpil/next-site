'use client'
import { useState, FormEvent } from 'react'
import styles from './CallbackForm.module.css'
import stylesButton from './Button.module.css'

const Callback = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      if (!response.ok) {
        throw new Error('Не удалось отправить форму. Пожалуйста попробуйте позже.')
      }
 
      const data = await response.json()

    } catch (error: any) {
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="container mx-auto px-2">
      <h1 className={styles.title}>Оставьте заявку</h1>

      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            {/* TODO */}
            <select name="city" required>
              <option value="">Выберите город</option>
              <option value="Moscow">Москва</option>
              <option value="Saint Petersburg">Санкт-Петербург</option>
              <option value="Novosibirsk">Новосибирск</option>
            </select>
          </div>

          <div>
            <input type="text" name="name" placeholder="Имя" required />
          </div>

          <div className="flex gap-5">
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="+7 (___) __-__-___" required />
          </div>

          <div>
            <textarea name="note" placeholder="Оставьте пометку к заказу"></textarea>
          </div>

          <div>
            <input className="block cursor-pointer bg-gray-50 focus:outline-none" type="file" />
          </div>

          <div className="flex items-center mb-8">
            <label className={styles.checkbox}>
              <input id="checkbox-rule" type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
            <label htmlFor="checkbox-rule" className={styles.label}>Даю согласие на обработку своих персональных данных</label>
          </div>
          
          <button type="submit" className={stylesButton.button} disabled={isLoading}>
            {isLoading ? 'Отправка...' : 'Оставить заявку'}
          </button>

          {error && <div className={styles.error}>{error}</div>}
        </form>

        <div className={styles.content}>
          <span>Наша горячая линия</span>
          <p>8 800 38 23 112</p>

          <span>Главный офис</span>
          <p>г. Москва, Садовническая ул., 80</p>

          <span>Часы работы</span>
          <p>Пн-Пт с 10:00 до 22:00</p>
        </div>
      </div>
    </section>
  )
}

export default Callback
