'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Card from '@/components/Card'
import styles from './Slider.module.css'
import 'swiper/css'
import '@/app/swiper.css'

export interface Slide {
  title: string;
  descriptions: string;
  image: string;
  content: string;
}

const Slider = () => {

  const slides: Array<Slide> = [
    {
      title: 'Геральт',
      descriptions: 'Генри Кавилл',
      image: '/card-1.jpg',
      content: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник'
    },
    {
      title: 'Лютик',
      descriptions: 'Джои Бэти',
      image: '/card-2.jpg',
      content: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник'
    },
    {
      title: 'Йеннифэр',
      descriptions: 'Аня Чалотра',
      image: '/card-3.jpg',
      content: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник'
    },
    {
      title: 'Цири',
      descriptions: 'Фрейя Аллан',
      image: '/card-4.jpg',
      content: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник'
    },
    {
      title: 'Эмгыр вар Эмрейс',
      descriptions: 'Барт Эдвардс',
      image: '/card-5.jpg',
      content: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник'
    },
    {
      title: 'Лютик',
      descriptions: 'Джои Бэти',
      image: '/card-2.jpg',
      content: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник'
    },
  ]

  return (
    <section className={styles.slider}>
      <div className="container mx-auto px-2">
        
        <div className={styles.header}>
          <h2 className={styles.title}>Актерский состав</h2>

          <div className={styles.arrows}>
            <button className="swiper-arrow-prev swiper-arrow">
              <svg width="18" height="32" viewBox="0 0 18 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.276 15.1219L2.47506 0.361867C1.99013 -0.121444 1.20501 -0.120631 0.720883 0.364367C0.237135 0.849302 0.238385 1.63486 0.723383 2.11855L14.6433 16L0.722883 29.8815C0.237947 30.3652 0.236697 31.1503 0.720383 31.6353C0.963069 31.8784 1.28101 32 1.59894 32C1.91607 32 2.23275 31.8792 2.475 31.6378L17.276 16.8782C17.5096 16.6458 17.6406 16.3295 17.6406 16C17.6406 15.6706 17.5092 15.3547 17.276 15.1219Z" fill="currentColor" /></svg>
            </button>
            <button className="swiper-arrow-next swiper-arrow">
              <svg width="18" height="32" viewBox="0 0 18 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.276 15.1219L2.47506 0.361867C1.99013 -0.121444 1.20501 -0.120631 0.720883 0.364367C0.237135 0.849302 0.238385 1.63486 0.723383 2.11855L14.6433 16L0.722883 29.8815C0.237947 30.3652 0.236697 31.1503 0.720383 31.6353C0.963069 31.8784 1.28101 32 1.59894 32C1.91607 32 2.23275 31.8792 2.475 31.6378L17.276 16.8782C17.5096 16.6458 17.6406 16.3295 17.6406 16C17.6406 15.6706 17.5092 15.3547 17.276 15.1219Z" fill="currentColor" /></svg>
            </button>
          </div>
        </div>
        
        <Swiper 
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={'auto'}
          navigation={{ nextEl: '.swiper-arrow-next', prevEl: '.swiper-arrow-prev' }}
          pagination={{ clickable: true, type: 'progressbar' }}
          className={styles.swiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} style={{ width: '282px' }}>
              <Card
                title={slide.title}
                descriptions={slide.descriptions}
                image={slide.image}
                content={slide.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Slider
