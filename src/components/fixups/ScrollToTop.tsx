import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { PropsWithChildren } from "react";

const ScrollToTop = ({ children }: PropsWithChildren<{}>) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
