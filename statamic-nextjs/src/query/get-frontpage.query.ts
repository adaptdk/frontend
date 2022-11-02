import { statamicClient } from '../services/statamic/client'

export async function getFrontpage() {
  try {
    const [entry, nav, seo] = await Promise.all([
      statamicClient.getEntry({ uri: '/' }),
      statamicClient.getNav({ handle: 'universes' }),
      statamicClient.getGlobalSet({ handle: 'seo' }),
    ])

    const header = await statamicClient.getHeader({
      handle: `${entry?.entry?.collection.handle}`,
    })

    return {
      ...entry,
      ...nav,
      ...seo,
      ...header,
    }
  } catch (error) {
    console.error(error)
  }
}
