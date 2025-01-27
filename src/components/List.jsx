import React, { useState } from "react";
import ListItem from "./ListItem";

export default function List({ items, onDeleteItem, onToggleCheck, onCleatList }) {
  const [sortType, setSortType] = useState("input");

  let sortItems;

  if (sortType === "description") {
    sortItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortType === "packed") {
    sortItems = items.slice().sort((a, b) => +b.packed - +a.packed);
  }

  if (sortType === "input") {
    sortItems = items.slice().sort((a, b) => a.id - b.id);
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map((item, index) => {
          return <ListItem item={item} key={index} onDeleteItem={onDeleteItem} onToggleCheck={onToggleCheck} />;
        })}
      </ul>

      <div className="actions">
        <select
          name="filter"
          id="filter"
          value={sortType}
          onChange={(e) => {
            setSortType(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onCleatList}>Clear list</button>
      </div>
    </div>
  );
}
