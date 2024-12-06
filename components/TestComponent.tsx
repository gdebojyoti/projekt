'use client'

import { useEffect, useState } from "react"

const TestComponent = () => {
  const [val, setVal] = useState(1)

  useEffect(() => {
    setVal(2)
  }, [])

  return (
    <div>Is this visible? {val}</div>
  )
}

export default TestComponent