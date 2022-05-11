import { useEffect, useState } from "react";
import axios from "axios";

type fetchData = {
  id: number,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

function Searchbar() {
  const [query, setQuery] = useState("");

  const [data, setData] = useState<fetchData[]>([]);

  // Add one more state to store the authors being searched for

  const [searchResults, setSearchResults] = useState<fetchData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://picsum.photos/v2/list`);
      setData(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSearchResults(
      data.filter((authorData : fetchData) =>
        authorData.author.toLowerCase().includes(query)
      )
    );
  }, [query, data]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div>
        {searchResults.map((author) => (
          <div key={author.id}>{author.author}</div>
        ))}
      </div>
    </div>
  );
}

export default Searchbar;
