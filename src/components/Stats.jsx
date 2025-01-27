import React from "react";

export default function Stats({ items }) {
  const itemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  const packedPercentage = (packedItemsCount / itemsCount) * 100;

  return (
    <div className="stats">
      {itemsCount === 0
        ? `Start adding some items to your packing list 🚀`
        : itemsCount === packedItemsCount
        ? `You got everything! Ready to go ✈️`
        : `💼 You have ${itemsCount} items on your list, and you already packed ${packedItemsCount} (${packedPercentage}%)`}
    </div>
  );
}
