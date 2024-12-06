import { Metadata } from 'next'

import Goodreads from '@/components/Goodreads'
import TestComponent from '@/components/TestComponent'
import getBooks from '@/utils/getBooks'

const GoodreadsPage = () => {
  const publisherTags = [
    { key: "Marvel", label: "Marvel" },
    { key: "DC", label: "DC" },
    { key: "<TBD>", label: "Untagged" }
  ]

  return (
    <div>
      <h1>Top 100 books!</h1>

      <TestComponent />
      <Goodreads publisherTags={publisherTags} data={getBooks()} />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Top 100 books",
  description: "",
};

export default GoodreadsPage