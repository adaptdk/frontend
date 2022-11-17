import { ReactNode } from "react"
import { TextBlock } from "../02-molecules/TextBlock"
import { Uspbar } from "../02-molecules/Uspbar"

type uspType = {
  icon: {
    value: string
    label: string
  }
  text: string
}

export type Props = {
  heading: string
  children: ReactNode
  buttonLabel: string
  buttonLink: string
  imageUrl: string
  imageAlt: string
  uspItems?: uspType[]
}

export const Hero = ({
  heading,
  children,
  buttonLabel,
  buttonLink,
  imageUrl,
  imageAlt,
  uspItems,
}: Props) => {
  return (
    <section className="space-y-10">
      <div className="flex w-full gap-2xl items-center">
        <TextBlock className="w-2/5" heading={heading} buttonLabel={buttonLabel} buttonLink={buttonLink} headingLevel="h1" headingStyle="xl-display">{children}</TextBlock>
        <picture className="w-3/5 rounded-2xl bg-gray-50 overflow-hidden">
          <img src={imageUrl} alt={imageAlt} className="object-cover aspect-16/9 w-full" />
        </picture>
      </div>

      {uspItems && <Uspbar items={uspItems} />}
    </section>
  )
};