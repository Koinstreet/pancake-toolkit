import React from "react";
// import Svg from "../../../components/Svg/Svg";
// import { SvgProps } from "../../../components/Svg/types";

const Logo = ({ ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <span {...props}>
      <img
        src="https://res.cloudinary.com/djhbhzex4/image/upload/v1625009115/plutopepelogo_raf3ko.png"
        alt="pluto pepe"
        width={120}
      />
    </span>
  );
};

export default React.memo(Logo);
