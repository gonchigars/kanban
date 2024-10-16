import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [, drag] = useDrag({
    type: "ITEM",
    item: { id: item.id, name: item.name },
  });

  return (
    <div ref={drag} className="draggable-item">
      {item.name}
    </div>
  );
};

export default DraggableItem;
