import { AnimationClass } from "../types/style";

export const addAnimation = (
  element: HTMLElement | null,
  className: AnimationClass,
  delay: number = 0
) => {
  if (!element) return;
  element.style.opacity = "0";
  element.style.animationDelay = `${delay}ms`;
  setTimeout(() => {
    element.style.opacity = "1";
    element.classList.add(className);
  }, delay);
};
