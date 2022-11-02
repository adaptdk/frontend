import { BlockTextIllustration } from "@foundation/ui/components/03-organisms/BlockTextIllustration"
import { BlockTextImage } from "@foundation/ui/components/03-organisms/BlockTextImage"

export const BlockMapper = (props: any) => {
  console.log(props)
  switch (props.__typename) {
    case 'Set_ReplicatorContent_ElementMTekstOgBillede':
      return <BlockTextImage 
        heading={props.title} 
        buttonLabel={props.button_text} 
        buttonLink={props.button_link} 
        text={props.bodytext}
        imageUrl={props.image_pages.permalink}
        layoutDirection={props.layout_direction.value} />
    case 'Set_ReplicatorContent_ElementWithTextAndIllustration':
      return <BlockTextIllustration
      heading={props.title} 
      buttonLabel={props.button_text} 
      buttonLink={props.button_link} 
      text={props.text}
      illustrationUrl={props.illustration.value}
      layoutDirection={props.layout_direction.value}
      bgColor={props.background.value} />
    default:
      return <p>mangler modul</p>
  }
}