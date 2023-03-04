import React from "react";
import { Userlist } from "../components/Userlist";

export const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Max Schwarz",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      places: 1,
    },
  ];

  return (<Userlist items={USERS} />);
};
