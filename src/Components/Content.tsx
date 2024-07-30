import { ReactElement } from "react";
import { IBook } from "../interfaces";

import "../css/css-grid.css";
import "../css/Content.css";

export interface IContentProps {
  books: IBook[];
  index: number;
  // indexState: useState;
  // initialIndex: number;
  // setIndex: Function;
}

export function Content({ books, index }: IContentProps): ReactElement {
  // const [index, setIndex] = useState(initialIndex);

  return (
    <div className="content">
      <img className="image" src={books[index].src} alt={books[index].src} />
      <article className="article">
        <h2 className="header">Title: {books[index].title}</h2>
        <p className="paragraph">Author: {books[index].author}</p>
        <p className="paragraph">Series: {books[index].series} series</p>
      </article>
    </div>
  );
}
