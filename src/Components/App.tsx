import { useState } from "react";
import { Header, Navbar, Content } from ".";
import { books } from "../data";

import "../css/App.css";
import "../css/css-grid.css";

// const onSelectFunc = (id: number) => index = id;

export function App() {
  let index: number = 0;
  const [index2, setIndex] = useState(index);

  const updateIndexOnClick = (idx: number) => {
    // index = idx;
    // window.location.reload();
    // console.log(index);
    setIndex(idx);
  };

  return (
    <div className="body">
      <Header />
      <Navbar books={books} index={index} onSelect={updateIndexOnClick} />
      <Content books={books} index={index2} />
    </div>
  );
}
