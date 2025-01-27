import React, { useState } from "react";

export default function ListItem({ item, onDeleteItem, onToggleCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        name="pack"
        checked={item.packed ? "checked" : ""}
        onChange={() => {
          onToggleCheck(item.id);
        }}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
