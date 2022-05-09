import { useEffect, useState } from 'react';

import axios from 'axios';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  // Add one more state to store the authors being searched for
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://picsum.photos/v2/list`);
      setData(res.data);
    };
    fetchData();
  }, []);

  // Query that handles searching
  useEffect(() => {
    setSearchResults(
      data.filter((authorData) =>
        authorData['author'].toLowerCase().includes(query)
      )
    );
  },[query, data]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div>
        {searchResults.map((author) => (
          <div>{author}</div>
        ))}
      </div>
    </div>
  );
}

export default Searchbar;
