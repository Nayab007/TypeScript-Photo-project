import React, { useEffect, useState } from "react";
import Pictures from "./Pictures";
import fetchPictures from "./services/fetchPictures";
import './App.css';

export interface Users {
  id: number;
  author: string;
  download_url: string;
  url: string;
  page: string;
}

export default function App() {
  const [pictures, setPictures] = useState<Array<Users>>([]);
  const [page, setPage] = useState<number>(1);

  // here we handle the change of the page
  const changePage = (e: any) => {
    const buttonId = e.target.id;
    // do nothing if is the first page
    const firstPage = page === 1 ? true : false;
    if (firstPage && buttonId === "previousButton") return;
    // here is where the magic happens
    return buttonId === "nextButton" ? setPage(page + 1) : setPage(page - 1);
  };

  useEffect(() => {
    // you are able to pass a limit too, change the second parameter to see
    const pics = async () => {
      const pics = await fetchPictures(page, 10);
      setPictures(pics);
    };

    pics();
  }, [page]);

  return (
    <>
    <div>
<button id="previousButton" onClick={changePage}>
          Previous page
        </button>
        Page {page}
        <button id="nextButton" onClick={changePage}>
          Next page
        </button>
        
      <Pictures pictures={pictures} />
     
      
      <div>
        <button id="previousButton" onClick={changePage}>
          Previous page
        </button>
        Page {page}
        <button id="nextButton" onClick={changePage}>
          Next
        </button>
      </div>
      </div>
    </>
  );
}

