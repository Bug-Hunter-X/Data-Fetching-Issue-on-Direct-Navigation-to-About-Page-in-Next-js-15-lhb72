```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('/api/data')
          .then(res => res.json())
          .then(data => {
            setData(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, []);
    if(loading) return <p>Loading...</p>;
    if(!data) return <p>Error loading data</p>;
    return(
        <div><h1>About us</h1>
        <p>{data.message}</p></div>
    );
}
```