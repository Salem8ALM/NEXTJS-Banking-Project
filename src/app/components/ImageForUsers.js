"use client";

// import placeholder from "../images/"; // need to add photo
import Image from "next/image";
import { useState } from "react";

function ImageForUsers(props) {
  const [src, setSrc] = useState(props.src);
  console.log(src);
  return (
    <Image
      {...props}
      src={`https://react-bank-project.eapi.joincoded.com/${src}`.trimEnd()}
      onError={() => setSrc(placeholder)}
    />
  );
}

export default ImageForUsers;
