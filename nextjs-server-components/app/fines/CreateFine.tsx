'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateFine() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const router = useRouter()

  const create = async() => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/fines/records', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        price
      }),
    })

    setTitle('')
    setDescription('')
    setPrice('')

    router.refresh()
  }

  return (
    <form onSubmit={create} className="border border-red-500 rounded p-8 inline-flex">
      <div className="space-y-2 w-[25vw]">
        <h3 className="text-lg font-semibold">Create new fine</h3>

        <div>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border bg-transparent rounded p-1 w-full"/>
        </div>

        <div>
          <input name="content" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border bg-transparent rounded p-1 w-full"/>
        </div>

        <div>
          <input name="content" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border bg-transparent rounded p-1 w-full"/>
        </div>

        <div>
          <button type='submit' className="border rounded p-1 w-full">Create fine</button>
        </div>
      </div>
    </form>
  )
}
