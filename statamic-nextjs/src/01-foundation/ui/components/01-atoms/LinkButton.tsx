import { AnchorHTMLAttributes, ReactNode } from "react"

export type Props = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkButton = ({
  children,
  className,
  ...props
}: Props) => {
  return <a className="leading-base cursor-pointer inline-flex items-center font-body text-xs sm:text-sm font-bold box-border transition-all duration-150 disabled:opacity-30 disabled:!cursor-default gap-2 no-underline border-0 bg-sd-red-400 text-white py-2 px-4 sm:px-5 rounded-full hover:bg-sd-red-500 focus:shadow-inner-2 shadow-sd-red-500" {...props}>{children}</a>;
};
