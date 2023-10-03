import React, {useContext} from "react";
import { contextProvider } from "@/global/global";

export default function openImg(props) {
    const {open} = useContext(contextProvider);
  return (
    <div className="w-screen h-screen absolute z-99" onClick={open===null}>
      <div className="w-90 h-90 object-cover relative">
        <img
          src={props.image}
          key={props.key}
          alt="image not found"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
