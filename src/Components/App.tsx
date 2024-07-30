import { Header, Navbar, Content } from ".";
import { books } from "../data";

import "../css/App.css";
import "../css/css-grid.css";

let index: number = 0;
const updateIndexOnClick = (idx: number) => {
  index = idx;
  console.log(index);
};

// const onSelectFunc = (id: number) => index = id;

export function App() {
  return (
    <div className="body">
      <Header />
      <Navbar books={books} index={index} onSelect={updateIndexOnClick} />
      <Content books={books} index={index} />
    </div>
  );
}
