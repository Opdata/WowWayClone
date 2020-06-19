import { useState, useEffect } from "react";

export default (Ref) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const WidthState = () => {
      setWidth(document.body.clientWidth);
    };

    if (document.body.clientHeight > window.innerHeight) {
      setWidth(document.body.clientWidth);
    }

    window.addEventListener("resize", WidthState);

    return () => {
      window.removeEventListener("resize", WidthState);
    };
  }, [Ref]);

  return width;
};
