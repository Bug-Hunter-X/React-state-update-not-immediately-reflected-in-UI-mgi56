```javascript
// Example file: index.js

import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

```javascript
// This is not a TailwindCSS specific error. This example shows a common React component and how to handle the state.
```