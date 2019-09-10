import React from 'react'
import { useMyHook } from 'usethrottle'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App