import Link from 'next/link'

import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlayIcon,
  LinkIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'

const icons = {
  design: PencilSquareIcon,
  analysis: MagnifyingGlassIcon,
  training: AcademicCapIcon,
  followup: ClipboardDocumentCheckIcon,
  overview: MapIcon,
  faq: QuestionMarkCircleIcon,
  person: UserIcon,
  news: MegaphoneIcon,
  use: PlayIcon,
  link: LinkIcon,
  resources: ClipboardDocumentListIcon,
}

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon }) {
  let IconComponent = icons[icon]

  return (
    <div className="group relative rounded-xl border border-stone-200 dark:border-stone-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.teal.50)),var(--quick-links-hover-bg,theme(colors.teal.50)))_padding-box,linear-gradient(to_top,theme(colors.sky.400),theme(colors.cyan.400),theme(colors.teal.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.stone.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <IconComponent className="h-8 w-8 text-teal-700 dark:text-teal-400" />
        <h2 className="mt-4 font-display text-base text-stone-900 dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
          {description}
        </p>
      </div>
    </div>
  )
}
