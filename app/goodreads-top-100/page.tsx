import { Metadata } from 'next'

import Goodreads from '@/components/Goodreads'
import getBooks from '@/utils/getBooks'

const GoodreadsPage = () => {
  const publisherTags = [
    { key: "Marvel", label: "Marvel" },
    { key: "DC", label: "DC" },
    { key: "<TBD>", label: "Untagged" }
  ]

  return (
    <div>
      <h1>Top Omnibus edition books from Marvel & DC</h1>
      <h2>Sorted according to ratings on GoodReads</h2>

      <Goodreads publisherTags={publisherTags} data={getBooks()} />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Top 100 books",
  description: "",
};

export default GoodreadsPage