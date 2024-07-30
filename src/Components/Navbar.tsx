import { ReactElement } from "react";
import { NavItem, IBook } from ".";

import "../css/Navbar.css";

export interface INavbarProps {
  books: IBook[];
  index: number;
  onSelect: Function;
}

export function Navbar({ books, index, onSelect }: INavbarProps): ReactElement {
  return (
    <nav className="navbar">
      {books.map((book) => (
        <NavItem
          key={book.id}
          book={book}
          onSelect={() => onSelect(book.id - 1)}
          index={index}
        />
      ))}
    </nav>
  );
}
