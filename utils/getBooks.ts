import initialList from '@/data/books.json'
import marvelFullList from '@/data/marvel-omni.json'
import dcFullList from '@/data/dc-omni-wiki.json'
import Book from '@/types/book'

function getBooks (): { lastUpdatedOn: number, list: Book[] } {
  const books: any = {}

  const allBooks: Book[] = [...initialList.list, ...marvelFullList.list, ...dcFullList.list]

  allBooks.forEach(book => {
    const { key, totalRatings } = book

    // discard books with less than 10 ratings
    if (totalRatings && totalRatings >= 10) {
      books[key] = book
    }
  })

  return {
    ...marvelFullList, // for the latest `lastUpdatedOn`
    list: Object.values(books)
  }
}

export default getBooks