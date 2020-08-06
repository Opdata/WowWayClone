export const ScrollControlRemove = () => {
  const root = document.querySelector("#root");
  root.classList.remove("noScroll");
};

export const ScrollControlAdd = () => {
  const root = document.querySelector("#root");
  root.classList.add("noScroll");
};
