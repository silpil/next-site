import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export interface HeaderProps {
  children?: Readonly<React.ReactNode>
  background?: string
}

export function Header({ children, background }: HeaderProps) {

  return (
    <header style={{ backgroundColor: background ? background : 'black' }}>
      <div className={`container mx-auto px-2 ${styles.wrapper}`}>
        <Link href="/">
          <Image
            src="/logo.png"
            width={130}
            height={44}
            alt="Logo"
          />
        </Link>

        <div className='ml-auto'>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header
