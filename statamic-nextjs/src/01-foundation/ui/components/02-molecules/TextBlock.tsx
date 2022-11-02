import { AnchorHTMLAttributes, ReactNode } from "react"
import { LinkButton } from "../01-atoms/LinkButton"

export type Props = {
  heading: string
  children: ReactNode
  buttonLabel: string
  buttonLink: string
  className?: string
}

export const TextBlock = ({
  heading,
  children,
  buttonLabel,
  buttonLink,
  className,
}: Props) => {
  return (
    <div className={`space-y-2xl ${className}`}>
      <div className="space-y-md">
        <h1 className="font-display text-5xl">{heading}</h1>
        <p className="font-sans text-base">{children}</p>
      </div>
      <LinkButton href={buttonLink}>{buttonLabel}</LinkButton>
    </div>
  )
};