import Image from 'next/image'
import styles from './Card.module.css'

export interface CardProps {
  title: string;
  descriptions: string;
  image: string;
  content: string;
}

export function Card({ title, descriptions, image, content }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <p>{descriptions}</p>

        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </div>

      <Image
        src={image}
        width={282}
        height={400}
        alt={title}
      />
    </article>
  )
}

export default Card
