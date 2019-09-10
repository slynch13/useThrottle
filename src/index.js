import { useRef, useState, useEffect, useCallback } from 'react'

let useThrottle = (func, limit) => {
  let [args, setArgs] = useState()

  let throttledFunction = (...args) => {
    // console.log(args)
    setArgs(args || [])
  }

  let newRunTime = useRef(Date.now())
  useEffect(() => {
    if (args === undefined) return
    let time = newRunTime.current - Date.now()
    let timer = setTimeout(() => {
      func(...args)
      newRunTime.current = Date.now() + limit
    }, time)
    return () => clearTimeout(timer)
  }, [func, args, limit])
  return useCallback(throttledFunction, [])
}

export { useThrottle }
