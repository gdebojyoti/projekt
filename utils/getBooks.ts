import initialList from '@/data/books.json'
import marvelOmni1 from '@/data/marvel-omni-p1.json'
import marvelOmni2 from '@/data/marvel-omni-p2.json'
import marvelOmni3 from '@/data/marvel-omni-p3.json'
import Book from '@/types/book'

function getBooks (): { lastUpdatedOn: number, list: Book[] } {
  const books: any = {}

  const allBooks: Book[] = [...initialList.list, ...marvelOmni1, ...marvelOmni2, ...marvelOmni3]

  allBooks.forEach(book => {
    books[book.key] = book
  })

  return {
    ...initialList,
    list: Object.values(books)
  }
}

export default getBooks