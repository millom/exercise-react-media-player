import { ReactElement } from "react";
import { IBook } from "../interfaces";
import { NavItem } from "./NavItem";
// import { books } from "../data";

import "../css/css-grid.css";
import "../css/Navbar.css";

// const data2: IBook[] = data;
export interface INavbarProps {
  books: IBook[];
  index: number;
}

export function Navbar({ books, index }: INavbarProps): ReactElement {
  return (
    <nav className="navbar">
      {books.map((book) => (
        <NavItem key={book.id} book={book} />
      ))}
    </nav>
  );
}
