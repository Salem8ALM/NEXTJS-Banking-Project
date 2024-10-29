"use client";

import Image from "next/image";

function ImageForUsers(props) {
  //const [src, setSrc] = useState(props.src);
  //console.log(props.src);
  const imgUrl = props.src
    ? `https://react-bank-project.eapi.joincoded.com/${props.src}`.trimEnd()
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Profile_photo_placeholder_square.svg/1200px-Profile_photo_placeholder_square.svg.png";
  return <Image {...props} src={imgUrl} />;
}

export default ImageForUsers;
