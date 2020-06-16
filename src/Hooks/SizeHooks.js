import { useState, useEffect } from "react";

const getWidth = () => {
  // const width = window.innerWidth;
  const width = document.body.clientWidth;

  return width;
};

export const InnerWidth = () => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const WidthState = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", WidthState);

    return () => {
      window.removeEventListener("resize", WidthState);
    };
  }, []);

  return width;
};
