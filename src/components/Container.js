import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";
import { useDispatch } from "react-redux";
import { moveItem } from "../redux/actions";

const Container = ({ id, items }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item) => {
      dispatch(moveItem(item, id));
    },
  });

  return (
    <div ref={drop} className="container">
      <h2>Container {id}</h2>
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Container;
