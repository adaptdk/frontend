import { ReactNode } from "react"
import { Heading } from "../01-atoms/Heading"
import { LinkButton } from "../01-atoms/LinkButton"

export type Props = {
  heading: string
  children: ReactNode
  buttonLabel: string
  buttonLink: string
  className?: string
  headingLevel?: string
  headingStyle?: string
}

export const TextBlock = ({
  heading,
  children,
  buttonLabel,
  buttonLink,
  className,
  headingLevel = 'h2',
  headingStyle = 'lg'
}: Props) => {
  return (
    <div className={`space-y-2xl ${className}`}>
      <div className="space-y-md">
        <Heading headingLevel={headingLevel} headingStyle={headingStyle}>{heading}</Heading>
        <div className="font-sans text-base">{children}</div>
      </div>
      <LinkButton href={buttonLink}>{buttonLabel}</LinkButton>
    </div>
  )
};