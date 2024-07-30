import { ReactElement } from "react";
import { IBook } from ".";

import "../css/Content.css";

export interface IContentProps {
  books: IBook[];
  index: number;
}

export function Content({ books, index }: IContentProps): ReactElement {
  return (
    <div className="content">
      <figure className="big-figure">
        <img
          className="big-image"
          src={books[index].src}
          alt={books[index].src}
        />
      </figure>
      <article className="article">
        <h2 className="paragraph">Title: {books[index].title}</h2>
        <h2 className="paragraph">Author: {books[index].author}</h2>
        <h2 className="paragraph">Series: {books[index].series} series</h2>
      </article>
    </div>
  );
}
