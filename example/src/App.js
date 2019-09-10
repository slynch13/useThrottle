import React, { useState, useEffect } from 'react'
import { useThrottle } from 'usethrottle'

const App = () => {
  let [example, setExample] = useState(0)
  const throttled = useThrottle((x) => setExample(x), 1000)
  useEffect(() => {
    throttled(example + 1)
  }, [example])
  return (
    <div>
      {example}
    </div>
  )
}
export default App
