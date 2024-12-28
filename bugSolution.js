```javascript
// Solution file: bugSolution.js

import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Use functional update
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
//Explanation: Using setCount(prevCount => prevCount + 1) ensures that the update is based on the previous state value, resolving potential issues with stale closures.
```