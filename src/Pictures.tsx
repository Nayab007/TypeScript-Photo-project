import React from "react";
import { Users } from "./App";
import './App.css'

interface PictureProps {
  pictures: Array<Users>;
}

export default function Pictures(props: PictureProps) {
  const { pictures } = props;
  // here we are mapping the list that comes from the props
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "90%" }}>
      {pictures.map((user) => {
        return (
          <div className="grid-container" key={user.id} >
           
            <div>
            
            <a
                href={user.download_url}
                target="_blank"
                rel="noopener noreferrer"
              >
            <img
              src={user.download_url}
              width="367"
              height="267"
              alt={"some pic alt"}
            />
            </a>
            </div>
            <div className="title">
            <h4>Id: {user.id}</h4>
            <h5>Title: {user.author}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}