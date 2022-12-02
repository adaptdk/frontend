import { Fine } from '../../components/Fine'

type props = {
  id: string
}

type fine = {
  id: string
  title: string
  description: string
  created: string
  price: number
}

async function getFine(id: props) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/fines/records/${id}`, {
    next: { revalidate: 10 },
  })
  const data = await res.json()
  return data
}

export default async function FinePage({ params }: any) {

  const fine: fine = await getFine(params.id)
  return (
    <Fine key={fine.id} title={fine.title} id={fine.id} price={fine.price} description={fine.description} created={fine.created} />
  )
}
