import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-screen-xl mx-auto px-3 py-6 sm:py-12 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
