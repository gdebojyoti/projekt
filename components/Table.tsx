import Image from 'next/image'

import Book from "@/types/book"

const BookTable = ({ data }: { data: Book[] }) => {
  return (
    <table className="border-spacing-y-2 border-separate">
      <thead>
        <tr>
          <td className="w-10 text-center">#</td>
          <td className="w-20 text-center">Rating</td>
          <td>Title</td>
        </tr>
      </thead>

      <tbody>
        {data.map(({ key, title, rating, url }, index) => (
          <tr key={key}>
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{rating}</td>
            <td className="flex items-center">
              {/* <img
                className="w-[50px] h-[75px] object-cover"
                src={thumbnailUrl}
              /> */}
              <Image src='/images/thumbnail.jpg' alt='fallback logo' width={50} height={75} />
              <a className="ml-4" href={url}>{title}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTable