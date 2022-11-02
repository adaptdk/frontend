import { FALLBACK_DESCRIPTION } from '@foundation/config/constants'
import { Header } from '@foundation/ui/components/04-habitats/Header'
import { TopBar } from '@foundation/ui/components/04-habitats/TopBar'
import { LayoutFrontpage } from '@project/Layouts'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getFrontpage } from '../query/get-frontpage.query'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ nav, header, globalSet, entry }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <Head>
        <title>{`${entry?.title} | ${globalSet?.site.name}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar nav={nav} asPath={asPath} />
      <Header header={header} />
      <LayoutFrontpage content={entry} />
    </div>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const frontpage = await getFrontpage()

  return {
    props: {
      ...frontpage,
    },
  }
}

export default Home
