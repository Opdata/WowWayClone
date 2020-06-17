import { useState, useEffect } from "react";

export default (Ref) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const WidthState = () => {
      setWidth(Ref.current.clientWidth);
    };
    window.addEventListener("load", WidthState);
    window.addEventListener("resize", WidthState);

    return () => {
      window.removeEventListener("load", WidthState);
      window.removeEventListener("resize", WidthState);
    };
  }, [Ref]);

  return width;
};
