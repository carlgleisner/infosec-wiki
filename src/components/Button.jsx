import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-teal-400 py-2 px-4 text-sm font-semibold text-stone-900 hover:bg-teal-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300/50 active:bg-teal-500',
  secondary:
    'rounded-full bg-stone-800 py-2 px-4 text-sm font-medium text-white hover:bg-stone-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-stone-400',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
