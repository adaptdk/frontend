type uspType = {
  icon: {
    value: string
    label: string
  }
  text: string
}

export type Props = {
  items: uspType[]
}

export const Uspbar = ({
  items
}: Props) => {
  return (
    <div className="flex w-full gap-2xl items-center justify-around">
      {items.map((item, index) => (
        <div className="flex items-center space-x-4" key={index}>
          <picture className="w-10">
            <img src={`https://www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site/${item.icon.value}`} alt={item.icon.label} className="object-cover aspect-1/1 w-full" />
          </picture>
          <p className="text-lg font-sans">{item.text}</p>
        </div>
      ))}
    </div>
  )
};