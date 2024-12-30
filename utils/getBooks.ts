import initialList from '@/data/books.json'
import marvelOmni1 from '@/data/marvel-omni-p1.json'
import marvelOmni2 from '@/data/marvel-omni-p2.json'
import marvelOmni3 from '@/data/marvel-omni-p3.json'
import dcFullList from '@/data/dc-omni-wiki.json'
import Book from '@/types/book'

function getBooks (): { lastUpdatedOn: number, list: Book[] } {
  const books: any = {}

  const allBooks: Book[] = [...initialList.list, ...marvelOmni1, ...marvelOmni2, ...marvelOmni3, ...dcFullList.list]

  allBooks.forEach(book => {
    const { key, totalRatings } = book

    // discard books with less than 10 ratings
    if (totalRatings && totalRatings >= 10) {
      books[key] = book
    }
  })

  return {
    ...dcFullList,
    list: Object.values(books)
  }
}

export default getBooks