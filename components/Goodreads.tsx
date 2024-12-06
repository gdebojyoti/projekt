'use client'

import { useEffect, useState } from 'react'

import getReadableTimestamp from '@/utils/getReadableTimestamp'
import PublisherTag from '@/types/publisherTag'
import BookTable from './Table'
import Book from '@/types/book'

const Goodreads = ({ data, publisherTags }: { data: { lastUpdatedOn: number, list: Book[] }, publisherTags: PublisherTag[] }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredBooks, setFilteredBooks] = useState(firstTimeData(data.list))

  // filter books to be displayed
  useEffect(() => {
    let filteredBooks = data.list

    // if any filter is selected, show books accordingly
    if (selectedTags.length) {
      filteredBooks = data.list.filter(({ publisher }) => (selectedTags.includes(publisher)))
    }

    // sort books from highest rated to lowest
    filteredBooks = filteredBooks.sort((a, b) => (b.rating - a.rating))
    
    setFilteredBooks(filteredBooks)
  }, [selectedTags])

  const onToggleTag = (key: string) => {
    const newTags: string[] = [...selectedTags]
    const index = newTags.indexOf(key)

    if (index === -1) {
      setSelectedTags([...newTags, key])
      return
    }

    newTags.splice(index, 1)
    setSelectedTags(newTags)
  }

  return (
    <div>
      <FilterBar isAnySelected={!!selectedTags.length} tags={publisherTags} toggleTag={onToggleTag} />
      <BookTable data={filteredBooks} />

      <p>This list was last updated on: {getReadableTimestamp(data.lastUpdatedOn)}</p>
    </div>
  )
}

const FilterBar = ({ isAnySelected, tags, toggleTag }: { isAnySelected: boolean, tags: { key: string, label: string }[], toggleTag: (key: string) => void }) => {
  return (
    <div>
      <h2>Filters {!isAnySelected && '(select any filter to narrow down results)'}</h2>
      {tags.map(({ key, label }) => (
        <button key={key} onClick={() => toggleTag(key)}>{label}</button>
      ))}
    </div>
  )
}

function firstTimeData (data: Book[]) {
  return data.sort((a, b) => (b.rating - a.rating))
}

export default Goodreads