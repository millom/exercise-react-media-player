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
  // onSelect: React.MouseEventHandler<HTMLElement>; //(id: number) => index = id;
  onSelect: Function; //(id: number) => index = id;
}

export function Navbar({ books, index, onSelect }: INavbarProps): ReactElement {
  return (
    <nav className="navbar">
      {books.map((book) => (
        <NavItem
          key={book.id}
          book={book}
          onSelect={() => onSelect(book.id - 1)}
        />
      ))}
    </nav>
  );
}
