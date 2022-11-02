import { Hero } from "@foundation/ui/components/03-organisms/Hero"

export type Props = {
  content: any
}

export const LayoutFrontpage = ({content}: Props) => {
  const {hero_body, hero_title, hero_link, hero_link_title, hero_image} = content

  return (
    <main className="container">
      <Hero 
          heading={hero_title} 
          buttonLabel={hero_link_title} 
          buttonLink={hero_link} 
          imageUrl={hero_image.permalink}
          imageAlt="test"
        >
          {hero_body}
        </Hero>
    </main>
  )
}