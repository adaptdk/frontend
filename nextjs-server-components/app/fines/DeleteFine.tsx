'use client'

import { useRouter } from 'next/navigation'

type props = { fineId: string }

export default function DeleteFine({ fineId }: props ) {
  const router = useRouter()

  const deleteFine = async() => {

    const res = await fetch(`http://127.0.0.1:8090/api/collections/fines/records/${fineId}`, {
      method: 'DELETE',
    })
    router.refresh()
  }

  return (
      <button onClick={() => deleteFine()} className="border border-red-500 rounded p-1 w-full">
          Delete
      </button>
  )
}
