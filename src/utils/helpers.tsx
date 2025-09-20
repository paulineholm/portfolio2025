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

export const parseMonthYear = (dateStr: string) => {
  const [month, year] = dateStr.split(" ");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return new Date(parseInt(year), months.indexOf(month));
};
