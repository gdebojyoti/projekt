import Book from "@/types/book"

const BookTable = ({ data }: { data: Book[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Rating</td>
          <td>Title</td>
        </tr>
      </thead>

      <tbody>
        {data.map(({ key, title, rating }) => (
          <tr key={key}>
            <td>{rating}</td>
            <td>
              {title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTable