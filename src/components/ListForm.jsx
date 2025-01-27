import React, { useState } from "react";

export default function ListForm({ onAddItems }) {
  const [qty, setQty] = useState("1");
  const [desc, setDesc] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (desc) {
      onAddItems(qty, desc);
      setDesc("");
      setQty("1");
    }
  }

  return (
    <form className="add-form" onSubmit={(e) => handelSubmit(e)}>
      <h3>
        <strong>What do you need for your 😍 trip?</strong>
      </h3>
      <select name="qty" id="qty" value={qty} onChange={(e) => setQty(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" name="item" id="item" placeholder="Item..." value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button className="add-btn">Add</button>
    </form>
  );
}
