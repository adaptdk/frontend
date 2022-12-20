import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LayoutFrontpage } from 'project/Layouts'
import { statamicClient } from 'services/statamic'
import { getFrontpageQuery } from 'services/statamic/generated/generated-types'
import { Header } from 'ui/components/04-habitats/Header'
import { TopBar } from 'ui/components/04-habitats/TopBar'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const mapNavigationTree = (
  nav: getFrontpageQuery['nav']
): {
  page: {
    url: string
    title: string
  }
}[] => {
  const mappedTree = nav?.tree?.map((item) => {
    return {
      page: {
        url: item?.page?.url || '',
        title: item?.page?.title || '',
      },
    }
  })

  if (!mappedTree) return []

  return mappedTree
}

const Home: NextPage<Props> = ({ nav, header, globalSet, entry }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <Head>
        <title>{`${entry?.title} | ${globalSet?.site.name}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav && <TopBar nav={{ title: 'Hej', tree: mapNavigationTree(nav) }} asPath={asPath} />}
      <Header header={header} />
      <LayoutFrontpage content={entry} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let token

  if (typeof context.previewData === 'object' && 'token' in context.previewData) {
    token = (context.previewData as { token: string }).token
  }

  try {
    const response = await statamicClient(token).getFrontpage()

    const header = await statamicClient(token).getHeader({
      handle: `${response?.entry?.collection.handle}`,
    })

    return {
      props: {
        ...response,
        ...header,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}

export default Home
