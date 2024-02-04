import React from "react";
import { useLocation } from "react-router-dom";

const Name = () => {
  const { search } = useLocation();
  let query = new URLSearchParams(search);

  return <h1>The name is {query.get("name")}</h1>;
};

export default Name;
