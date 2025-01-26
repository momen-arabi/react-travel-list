import React from "react";
import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <ListItem item={item} key={item.id} />;
        })}
      </ul>

      <div className="actions">
        <select name="filter" id="filter">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}
