import Link from 'next/link'
import styles from './Button.module.css'

export interface LinkButtonProps {
  label: string;
  href: string;
  outline?: boolean;
}

export function LinkButton({ label, outline, href }: LinkButtonProps) {
  return (
    <Link href={href} className={`${styles.button} ${outline && styles.outline}`}>
      {label}
    </Link>
  )
}

export default LinkButton