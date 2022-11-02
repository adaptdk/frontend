import classNames from "classnames"
import { TextBlock } from "../02-molecules/TextBlock"

export type Props = {
  heading: string
  text: string
  buttonLabel: string
  buttonLink: string
  illustrationUrl: string
  layoutDirection: string
  bgColor?: string
}

export const BlockTextIllustration = ({heading, text, buttonLink, buttonLabel, illustrationUrl, layoutDirection, bgColor = 'snow'}: Props) => {

  return (
    <section className="space-y-10">
      <div className={classNames('flex w-full items-center rounded-2xl', { 
        'flex-row-reverse': layoutDirection === 'right',
        'bg-sd-snow-400': bgColor === 'snow',
        'bg-sd-grey-400': bgColor === 'gray',
        })}>
        <TextBlock className="w-1/2 p-2xl" heading={heading} buttonLabel={buttonLabel} buttonLink={buttonLink}>
          <div dangerouslySetInnerHTML={{__html: text}} />
        </TextBlock>
        <picture className="w-1/2 flex-grow-0 flex-shrink-0">
          <img src={`https://www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site/${illustrationUrl}`} alt="none" className="object-cover aspect-1/1 w-full" />
        </picture>
      </div>
    </section>
  )
};