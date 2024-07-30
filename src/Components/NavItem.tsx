import { ReactElement } from "react";
import { IBook } from "../interfaces";

import "../css/NavItem.css";

interface IBookProps {
  book: IBook;
  onSelect: React.MouseEventHandler<HTMLElement>;
}

// const hello = () => console.log("Heelo");

export function NavItem({ book, onSelect }: IBookProps): ReactElement {
  return (
    <article className="nav-item" onClick={onSelect}>
      <figure className="small-figure">
        <img className="small-image" src={book.src} alt={book.src} />
      </figure>
      <p className="title">{book.title}</p>
      {/* <p>{book.author}</p>
      <p>{book.series}</p> */}
    </article>
  );
}
