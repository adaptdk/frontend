import classNames from "classnames"
import { TextBlock } from "../02-molecules/TextBlock"

export type Props = {
  heading: string
  text: string
  buttonLabel: string
  buttonLink: string
  imageUrl: string
  layoutDirection: string
}

export const BlockTextImage = ({heading, text, buttonLink, buttonLabel, imageUrl, layoutDirection}: Props) => {

  return (
    <section className="space-y-10">
      <div className={classNames('flex w-full items-center', { 
        'flex-row-reverse': layoutDirection === 'right'
        })}>
        <TextBlock className="w-1/2 p-2xl" heading={heading} buttonLabel={buttonLabel} buttonLink={buttonLink}>
          <div dangerouslySetInnerHTML={{__html: text}} />
        </TextBlock>
        <picture className="w-1/2 flex-grow-0 flex-shrink-0 rounded-2xl bg-gray-50 overflow-hidden">
          <img src={imageUrl} alt="none" className="object-cover aspect-16/9 w-full" />
        </picture>
      </div>
    </section>
  )
};