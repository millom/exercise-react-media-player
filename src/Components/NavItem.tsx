import { ReactElement } from "react";
import { IBook } from "../interfaces";

import "../css/NavItem.css";

interface IBookProps {
  book: IBook;
  onSelect: React.MouseEventHandler<HTMLElement>;
  index: number;
}

// const hello = () => console.log("Heelo");

export function NavItem({ book, onSelect, index }: IBookProps): ReactElement {
  return (
    <article
      className={book.id - 1 == index ? "nav-item active-item" : "nav-item"}
      onClick={onSelect}
    >
      <figure className="small-figure">
        <img className="small-image" src={book.src} alt={book.src} />
      </figure>
      <p className="title">{book.title}</p>
      {/* <p>{book.author}</p>
      <p>{book.series}</p> */}
    </article>
  );
}
