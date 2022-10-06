import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-stone max-w-none dark:prose-invert dark:text-stone-300',
        // headings
        'prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-stone-500 dark:prose-lead:text-stone-200',
        // links
        'dark:prose-a:text-white-400 prose-a:font-semibold',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.pink.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.stone.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.pink.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-stone-900 prose-pre:shadow-lg dark:prose-pre:bg-stone-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-stone-300/10',
        // hr
        'dark:prose-hr:border-stone-800'
      )}
      {...props}
    />
  )
}
