'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Gallery.module.css'
import stylesButton from './Button.module.css'

export interface GalleryItem {
  image: string;
  size: string;
  name: string;
}

export function Gallery() {
  const images = [
    {
      image: '/gallery-1.jpg',
      size: 'large',
      name: 'gallery-image-1'
    },
    {
      image: '/gallery-2.jpg',
      size: 'default',
      name: 'gallery-image-2'
    },
    {
      image: '/gallery-3.jpg',
      size: 'default',
      name: 'gallery-image-3'
    },
    {
      image: '/gallery-4.jpg',
      size: 'default',
      name: 'gallery-image-4'
    },
    {
      image: '/gallery-5.jpg',
      size: 'default',
      name: 'gallery-image-5'
    }
  ]

  const getSize = (size: string) => size === 'large' ? 588 : 282
  
  return (
    <section className={`container mx-auto px-2 ${styles.gallery}`}>
      <h2 className={styles.title}>Кадры со съемок</h2>
      
      <div className={styles.grid}>
        {images.map((item, index) => (
          <Image
            src={item.image}
            width={getSize(item.size)}
            height={getSize(item.size)}
            alt={`gallery-image-${index}`}
            key={index}
            className={styles[item.size]}
          />
        ))}
      </div>

      <button className={`mt-8 block ${stylesButton.button} ${stylesButton.outline} ${stylesButton.full}`}>
        Показать еще
      </button>
    </section>
  )
}

export default Gallery
