import React, {useContext} from "react";
import Image from "next/image";
import OpenImg from "./openImg";
import { contextProvider } from '../global/global'

function image(props) {
  const { setopen} = useContext(contextProvider);
  return (
    <div data-aos="zoom-in-up">
      <img
        src={props.urls.small}
        alt="img not found"
        className="mb-2"
        onClick={()=>{setopen(<OpenImg image={props.urls.small} key={props.id} />)}}
      />
    </div>
  );
}

export default image;
