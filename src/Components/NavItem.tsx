import { ReactElement } from "react";
import { IBook } from "../interfaces";

import "../css/NavItem.css";

interface IBookProps {
  book: IBook;
}

export function NavItem({ book }: IBookProps): ReactElement {
  return (
    <article className="nav-item">
      <img src={book.src} alt={book.src} height="75rem" />
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.series}</p>
    </article>
  );
}
