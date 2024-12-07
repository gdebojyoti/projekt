import { StringCallback } from "@/types/functions"

const SearchBar = ({ value, onChange }: {value: string, onChange: StringCallback}) => {
  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
        className="text-black"
      />
      {value && <button onClick={() => onChange('')}>Clear</button>}
    </div>
  )
}

export default SearchBar