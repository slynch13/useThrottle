import React, { useState, useEffect } from 'react'
import { useThrottle } from 'usethrottle'

const App = () => {
  let [example, setExample] = useState(0)
  const throttled = useThrottle((x) => {
    setExample(x => x + 1)
  }, 2000)
  let [state, setState] = useState(0)
  let [state2, setState2] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setState2(x => x + 1)
    }, 1000)
    setInterval(() => {
      setState(x => x + 1)
    }, 1000)
  }, [])
  useEffect(() => {
    throttled(state2)
  }, [state2])
  useEffect(() => {
    throttled(state)
  }, [state])
  return (
    <div>
      {example}<br />
      {state}<br />
      {state2}
    </div>
  )
}
export default App
