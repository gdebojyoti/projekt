import Image from 'next/image'

import Book from "@/types/book"

const BookTable = ({ data }: { data: Book[] }) => {
  return (
    <table className="border-spacing-y-2 border-separate">
      <tbody>
        {data.map(({ key, title, rating, totalRatings, url, publisher }, index) => (
          <tr key={key}>
            <td className="text-center"># {index + 1}</td>
            <td>
              <div className='flex px-4 items-start' key={key}>
                <Image src='/images/thumbnail.jpg' alt='fallback logo' width={50} height={71} className='rounded-md shrink-0' />
                <div className='ml-2 flex-grow min-w-0'>
                  <div className='text-sm leading-normal truncate'>{title}</div>
                  <div className='text-xs mt-1 opacity-60 leading-normal'>⭐ {rating} | {totalRatings} votes</div>
                  <div className='mt-1 px-2 py-1 text-xs rounded-full bg-gray-400 inline-block'>{publisher}</div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTable