import { Header, Navbar, Content } from ".";
import { books } from "../data";

import "../css/App.css";
import "../css/css-grid.css";

export function App() {
  return (
    <div className="body">
      <Header />
      <Navbar books={books} index={0} />
      <Content books={books} index={0} />
    </div>
  );
}
