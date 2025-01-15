```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause a warning in development mode but will work in production
    router.push('/another-page', '/another-page?query=value'); 
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent; 
```