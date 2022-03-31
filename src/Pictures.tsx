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
          <div key={user.id} style={{ width: "25%", margin: "5% 0% 0% 8%" }}>
           
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
            <div className="title">
            <h4>Id:{user.id}</h4>
            <h5 style={{wordSpacing: "15px", textAlign: "center", width: "25vw", marginTop: "-4vh"}}>Title: {user.author}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}