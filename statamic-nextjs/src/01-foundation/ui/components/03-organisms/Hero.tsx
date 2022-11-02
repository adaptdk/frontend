import { ReactNode } from "react"
import { TextBlock } from "../02-molecules/TextBlock"

export type Props = {
  heading: string
  children: ReactNode
  buttonLabel: string
  buttonLink: string
  imageUrl: string
  imageAlt: string
}

export const Hero = ({
  heading,
  children,
  buttonLabel,
  buttonLink,
  imageUrl,
  imageAlt,
}: Props) => {
  return (
    <section className="flex w-full gap-2xl items-center">
      <TextBlock className="w-2/5" heading={heading} buttonLabel={buttonLabel} buttonLink={buttonLink}>{children}</TextBlock>
      <picture className="w-3/5 rounded-2xl bg-gray-50">
        <img src={imageUrl} alt={imageAlt} className="object-cover rounded-lg aspect-16/9 w-full" />
      </picture>
    </section>
  )
};