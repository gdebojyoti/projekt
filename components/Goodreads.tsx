'use client'

import { useState } from 'react'

import getReadableTimestamp from '@/utils/getReadableTimestamp'
import PublisherTag from '@/types/publisherTag'

const Goodreads = ({ data, publisherTags }: { data: { lastUpdatedOn: number }, publisherTags: PublisherTag[] }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  console.log(data, selectedTags, new Date(data.lastUpdatedOn))

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
      <FilterBar tags={publisherTags} toggleTag={onToggleTag} />

      <p>This list was last updated on: {getReadableTimestamp(data.lastUpdatedOn)}</p>
    </div>
  )
}

const FilterBar = ({ tags, toggleTag }: { tags: { key: string, label: string }[], toggleTag: (key: string) => void }) => {
  return (
    <div>
      <h2>Filters</h2>
      {tags.map(({ key, label }) => (
        <button key={key} onClick={() => toggleTag(key)}>{label}</button>
      ))}
    </div>
  )
}

export default Goodreads