import { ReactElement } from "react";
// import { IBook } from "../interfaces";
import { NavItem } from "./NavItem";
import { books } from "../data";

import "../css/css-grid.css";

// const data2: IBook[] = data;

export function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      {books.map((book) => (
        <NavItem key={book.id} book={book} />
      ))}
    </nav>
  );
}
