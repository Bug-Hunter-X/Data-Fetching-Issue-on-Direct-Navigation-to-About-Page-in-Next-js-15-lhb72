```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/data')
          .then(res => res.json())
          .then(data => setData(data));
      }, []);
    if(!data) return <p>Loading...</p>;
    return(
        <div><h1>About us</h1>
        <p>{data.message}</p></div>
    );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res){
    res.status(200).json({message: 'This is the about us page'});
}
```