import type { NextApiRequest, NextApiResponse } from 'next'
import { statamicClient } from 'services/statamic'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, token } = req.query

  if (!token || typeof token === 'object') {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!id || typeof id === 'object') {
    return res.status(401).json({ message: 'Invalid id' })
  }

  const response = await statamicClient(token).getEntryById({ id })
  const uri = response.entry?.uri

  if (!uri) {
    return res.status(404).json({ message: 'Page was not found' })
  }

  res.setPreviewData({ token })

  res.redirect(uri)
}

export default handler
