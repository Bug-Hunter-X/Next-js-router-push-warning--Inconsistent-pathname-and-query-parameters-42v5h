```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Correct approach: use either pathname with implicit query or query object
    router.push('/another-page?query=value'); //Correct
    // router.push('/another-page', { query: 'value' }); // Correct, but less common for this case
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent; 
```