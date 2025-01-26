import React from "react";

export default function ListItem({ item }) {
  return (
    <li>
      <input type="checkbox" name="pack" checked={item.packed ? "checked" : ""} />
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
