import { BlockMapper } from 'project/BlockMapper'
import { Hero } from 'ui/components/03-organisms/Hero'

export type Props = {
  content: any
}

export const LayoutFrontpage = ({ content }: Props) => {
  const {
    hero_body,
    hero_title,
    hero_link,
    hero_link_title,
    hero_image,
    hero_usp_elements,
    replicator_content,
  } = content

  return (
    <main className="container space-y-20 mt-4 mb-8">
      <Hero
        heading={hero_title}
        buttonLabel={hero_link_title}
        buttonLink={hero_link}
        imageUrl={hero_image.permalink}
        imageAlt="test"
        uspItems={hero_usp_elements}
      >
        {hero_body}
      </Hero>
      {replicator_content.map((block: any, index: number) => (
        <BlockMapper {...block} key={index} />
        // <p>{block.title} {block.type}</p>
      ))}
    </main>
  )
}
