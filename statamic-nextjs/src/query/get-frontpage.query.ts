import { statamicClient } from '../services/statamic/client'

export async function getFrontpage() {
  try {
    const response = await statamicClient.getFrontpage()

    const header = await statamicClient.getHeader({
      handle: `${response?.entry?.collection.handle}`,
    })

    return {
      ...response,
      ...header,
    }
  } catch (error) {
    console.error(error)
  }
}
