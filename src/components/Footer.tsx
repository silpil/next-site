import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export interface HeaderProps {
  action?: boolean;
}

export function Footer() {

  return (
    <footer className="bg-indigo mt-auto">
      <div className={`container mx-auto px-2 ${styles.footer}`}>
        <Link href="/">
          <Image
            src="/logo.png"
            width={130}
            height={44}
            alt="Logo"
          />
        </Link>

        <div className={styles.text}>
          <Link href="/">
            Политика обработки персональных данных
          </Link>
        </div>

        <div className={styles.text}>
          Icons
        </div>
      </div>
    </footer>
  )
}

export default Footer
