import { useRef, useState, useEffect, useCallback } from 'react'

let useThrottle = (func, limit) => {
  let [args, setArgs] = useState()
  let timer = useRef()
  let throttledFunction = (...args) => {
    // console.log(args)
    setArgs(args || [])
  }

  let newRunTime = useRef(Date.now())
  useEffect(() => {
    if (args === undefined) return
    let time = newRunTime.current - Date.now()
    // console.log(timer.current, newRunTime.current)
    if (!timer.current) {
      timer.current = setTimeout(() => {
        newRunTime.current = Date.now() + limit
        func(...args)
      }, time)
      return () => {
        // console.log('SO BE IT')
        clearTimeout(timer.current)
        timer.current = undefined
      }
    }
  }, [func, args, limit])
  return useCallback(throttledFunction, [])
}

export { useThrottle }
