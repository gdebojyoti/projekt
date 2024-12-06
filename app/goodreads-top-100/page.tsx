import { Metadata } from 'next'

import books from '@/data/books.json'
import Goodreads from '@/components/Goodreads'
import TestComponent from '@/components/TestComponent'

const GoodreadsPage = () => {
  console.log(books)

  const publisherTags = [
    { key: "Marvel", label: "Marvel" },
    { key: "DC", label: "DC" }
  ]

  return (
    <div>
      <h1>Top 100 books!!</h1>

      <TestComponent />
      <Goodreads publisherTags={publisherTags} data={books} />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Top 100 books",
  description: "",
};

export default GoodreadsPage