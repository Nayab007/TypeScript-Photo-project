import { useEffect, useState } from "react";

import "./Searchbar.css";

import axios from "axios";



function Searchbar() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`https://picsum.photos/v2/?=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);
  
    return (
      <div className="app">
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        <div>{data}</div>
      </div>
    );
  }
  
  export default Searchbar;
  