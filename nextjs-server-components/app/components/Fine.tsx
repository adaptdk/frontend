import Link from 'next/link'
import DeleteFine from '../fines/DeleteFine'

type fine = {
  id: string
  title: string
  description: string
  price: number
  created: string
}

export const Fine = ({ id, title, description, created, price }: fine) => {
  return (
    <div className="space-y-2">
      <div className="border border-green-500 rounded p-2 min-w-[250px]">
        <Link href={`/fines/${id}`}>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h5>{description}</h5>
            <h5 className="font-semibold text-lg">{price} DKK</h5>
            <p className="text-sm text-gray-500">{created}</p>
          </div>
        </Link>
      </div>

      <DeleteFine fineId={id}/>
    </div>
  )}
