import { FALLBACK_DESCRIPTION } from '@foundation/config/constants'
import { GraphQLClient, gql, request } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type Props = any

const Home: NextPage<Props> = ({ globalSet, entry, nav }) => {
  return (
    <div>
      <Head>
        <title>{`${entry.title} | ${globalSet.site.name}`}</title>
        <meta name="description" content={entry.description || FALLBACK_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-11 relative z-50 w-full bg-grey-top-nav">
        <div className="container flex justify-between px-0">
          <div className="sm:w-auto flex w-full">
            <a
              href="/"
              className="relative px-2 sm:px-4 h-11 inline-flex flex-auto sm:flex-none items-center justify-center text-center border-t-2 text-xs sm:text-sm text-black leading-none transition duration-75 bg-white border-pages-500 font-bold"
            >
              For private
            </a>

            <a
              href="/for-behandlere"
              className="relative px-2 sm:px-4 h-11 inline-flex flex-auto sm:flex-none items-center justify-center text-center border-t-2 text-xs sm:text-sm text-black leading-none transition duration-75 z-10 border-transparent hover:bg-white hover:font-bold"
            >
              For behandlere
            </a>

            <a
              href="/erhverv"
              className="relative px-2 sm:px-4 h-11 inline-flex flex-auto sm:flex-none items-center justify-center text-center border-t-2 text-xs sm:text-sm text-black leading-none transition duration-75 z-10 border-transparent hover:bg-white hover:font-bold"
            >
              For erhverv
            </a>

            <a
              href="/nyt-sundt"
              className="relative px-2 sm:px-4 h-11 inline-flex flex-auto sm:flex-none items-center justify-center text-center border-t-2 text-xs sm:text-sm text-black leading-none transition duration-75 z-10 border-transparent hover:bg-white hover:font-bold"
            >
              Nyt &amp; Sundt
            </a>
          </div>
          <div className="sm:flex items-center hidden pr-4 space-x-4 text-sm">
            <a href="tel:+4570109070" className="flex items-center space-x-1">
              <svg
                className="w-4 h-4"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {' '}
                <path
                  d="M10.1429 8.92857L8.42857 10.6429L3.85714 6.07143L5.57143 4.35714L2.71429 1.5L1 3.21429C1 8.89486 5.60514 13.5 11.2857 13.5L13 11.7857L10.1429 8.92857Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>{' '}
              </svg>
              <span>70 10 90 70</span>
            </a>
          </div>
        </div>
      </div>

      <main>
        <h1>Hej: {entry?.title}</h1>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params ?? {}

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const uri = typeof slug === 'string' ? slug : slug.join('/')

  const pageQuery = gql`
    {
      entry(uri: "/${uri}") {
        title
        url
      }
      globalSet(handle: "seo") {
        site {
          name
        }
        ... on GlobalSet_Seo {
          site {
            locale
            name
            short_locale
            url
          }
        }
      }
      nav(handle: "universes") {
        title
        tree {
          page {
            title
            url
          }
        }
      }
    }
  `

  const response = await request(
    'https://www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site/graphql',
    pageQuery
  )

  return {
    props: {
      ...response,
    },
    revalidate: 60,
  }
}

export default Home
