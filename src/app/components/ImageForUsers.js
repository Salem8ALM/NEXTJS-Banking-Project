"use client";

import placeholder from "../images/"; // need to add photo
import Image from "next/image";
import { useState } from "react";

function ImageForUsers(props) {
  const [src, setSrc] = useState(
    props.src.startsWith("http") ? props.src : placeholder
  );
  return <Image {...props} src={src} onError={() => setSrc(placeholder)} />;
}

export default ImageForUsers;
