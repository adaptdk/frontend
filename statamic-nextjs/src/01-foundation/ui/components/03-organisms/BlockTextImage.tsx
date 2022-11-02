import classNames from 'classnames'
import Image from 'next/image'

import { TextBlock } from '../02-molecules/TextBlock'

export type Props = {
  heading: string
  text: string
  buttonLabel: string
  buttonLink: string
  layoutDirection: string
  image: any
}

export const BlockTextImage = ({
  heading,
  text,
  buttonLink,
  buttonLabel,
  layoutDirection,
  image,
}: Props) => {
  return (
    <section className="space-y-10">
      <div
        className={classNames('flex w-full items-center', {
          'flex-row-reverse': layoutDirection === 'right',
        })}
      >
        <TextBlock
          className="w-1/2 p-2xl"
          heading={heading}
          buttonLabel={buttonLabel}
          buttonLink={buttonLink}
        >
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </TextBlock>
        <Image
          src={image.permalink}
          alt={image.alt || 'billede'}
          width={image.width}
          height={image.height}
          className="w-1/2 flex-grow-0 flex-shrink-0 rounded-2xl bg-gray-50 overflow-hidden"
        />
      </div>
    </section>
  )
}
