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

    window.addEventListener("resize", function () {
      const delay = 300;
      let timer = null;
      clearTimeout(timer);
      timer = setTimeout(() => {
        clientSize();
      }, delay);
    });

    return () => {
      window.removeEventListener("resize", clientSize);
    };
  }, []);
  return { width, height };
};
