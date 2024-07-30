import { useState } from "react";
import { Header, Navbar, Content, books } from ".";

import "../css/css-grid.css";
import "../css/App.css";

export function App() {
  let index: number = 0;
  const [index2, setIndex] = useState(index);

  const updateIndexOnClick = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className="body">
      <Header />
      <Navbar books={books} index={index2} onSelect={updateIndexOnClick} />
      <Content books={books} index={index2} />
    </div>
  );
}
