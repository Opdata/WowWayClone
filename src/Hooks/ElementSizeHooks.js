import { useState, useEffect } from "react";

export default () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const clientSize = () => {
      setWidth(document.body.clientWidth);
      setHeight(window.innerHeight);
    };

    if (document.body.clientHeight > window.innerHeight) {
      setHeight(window.innerHeight);
      setWidth(document.body.clientWidth);
    }

    window.addEventListener("resize", clientSize);

    return () => {
      window.removeEventListener("resize", clientSize);
    };
  }, []);

  return { width, height };
};
