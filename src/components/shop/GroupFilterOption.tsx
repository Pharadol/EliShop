import { ReactNode } from "react";

function GroupFilterOption({
  children,
  title,
  last,
}: {
  children: ReactNode;
  title: string;
  last?: boolean;
}) {
  return (
    <div
      className={`mb-4 pb-4 w-full ${
        last ? "border-b-none" : "border-b-[1px]"
      }`}
    >
      <span className="pb-2 block">{title}</span>
      <div className="w-fit">{children}</div>
    </div>
  );
}

export default GroupFilterOption;
