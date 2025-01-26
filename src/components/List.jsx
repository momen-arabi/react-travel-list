import React from "react";

export default function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <li>
              <input type="checkbox" name="pack" checked={item.packed ? "checked" : ""} />
              <span>
                {item.quantity} {item.description}
              </span>
              <button>❌</button>
            </li>
          );
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
