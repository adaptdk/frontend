import CreateFine from './CreateFine'
import { Fine } from '../components/Fine'

type props = {
  fine: fine
}

type fine = {
  id: string
  title: string
  description: string
  price: number
  created: string
}

async function getFines() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/fines/records?page=1&perPage=30', { next: { revalidate: 10 }})
  const data = await res.json()
  return data?.items as fine[]
}

export default async function FinesPage() {
  const fines: fine[] = await getFines()

  return (
    <div className="space-y-4">

      <div className="border border-green-500 rounded p-8 space-y-2">
        <h1 className="text-2xl">Fines</h1>

        <div className="flex space-x-8">
          { fines?.map(({ price, created, title, description, id }: fine) => {
            return <Fine key={id} title={title} id={id} price={price} description={description} created={created} />
          })}
        </div>
      </div>
      <CreateFine />
    </div>
  )
}
