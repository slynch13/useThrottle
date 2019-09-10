# usethrottle

> React hook for to throttle functions

[![NPM](https://img.shields.io/npm/v/usethrottle.svg)](https://www.npmjs.com/package/usethrottle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save usethrottle
```

## Usage

```jsx
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

```

## License

MIT © [slynch13](https://github.com/slynch13)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
