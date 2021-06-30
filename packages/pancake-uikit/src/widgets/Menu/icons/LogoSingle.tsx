import React from "react";
// import Svg from "../../../components/Svg/Svg";
// import { SvgProps } from "../../../components/Svg/types";

const Logo = ({ ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <span {...props}>
      <img
        src="https://res.cloudinary.com/djhbhzex4/image/upload/v1625009161/plutopepelogoicon_nh9wp7.png"
        alt="pluto pepe"
        width={46}
      />
    </span>
  );
};

export default React.memo(Logo);
