import { ReactElement } from "react";

import "../css/css-grid.css";
import "../css/Header.css";

export function Header(): ReactElement {
  return (
    <div className="header">
      <span className="material-symbols-outlined">arrow_back_ios</span>
      <h1>Playlist - Moody</h1>
      <span className="material-symbols-outlined">more_vert</span>
    </div>
  );
}
