import classNames from 'classnames'
import Link from 'next/link'

type NavItem = {
  page: {
    title: string
    url: string
  }
}

export type Props = {
  nav: {
    title: string
    tree: NavItem[]
  }
  asPath: string
}

export const Header = ({ nav, asPath }: Props) => {
  return (
    <div className="h-11 relative z-50 w-full bg-grey-top-nav">
      <div className="container flex justify-between px-0">
        <nav className="sm:w-auto flex w-full" aria-label={nav.title}>
          {nav.tree.map(({ page }, index) => (
            <Link
              className={classNames(
                'relative px-2 sm:px-4 h-11 inline-flex flex-auto sm:flex-none items-center justify-center text-center border-t-2 text-xs sm:text-sm text-black leading-none transition duration-75',
                {
                  'z-10 border-transparent hover:bg-white hover:font-bold': asPath !== page.url,
                },
                {
                  'bg-white border-pages-500 font-bold': asPath === page.url,
                }
              )}
              href={page.url}
              key={index}
            >
              {page.title}
            </Link>
          ))}
        </nav>
        <div className="sm:flex items-center hidden pr-4 space-x-4 text-sm">
          <a href="tel:+4570109070" className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1429 8.92857L8.42857 10.6429L3.85714 6.07143L5.57143 4.35714L2.71429 1.5L1 3.21429C1 8.89486 5.60514 13.5 11.2857 13.5L13 11.7857L10.1429 8.92857Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
            </svg>
            <span>70 10 90 70</span>
          </a>
        </div>
      </div>
    </div>
  )
}
