import { ReactNode } from "react";

function Container({ children, className='' }: { children: ReactNode, className?: string}) {
  return <div className={`max-w-screen-xl mx-auto px-3 py-6 sm:py-12 ${className}`}>{children}</div>;
}

export default Container;
