import { PiShoppingCartThin } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiWarningCircleThin } from "react-icons/pi";
import { PiHeartStraightThin } from "react-icons/pi";
import { LiaSearchMinusSolid } from "react-icons/lia";

type Status =
  | "guest"
  | "empty-cart"
  | "empty-favorites"
  | "empty-search"
  | "error";

interface Props {
  status?: Status;
  desc?: string;
}

function EmptyState({ status = "error", desc }: Props) {
  const icons: Record<Status, JSX.Element> = {
    "empty-cart": <PiShoppingCartThin size={100} />,
    "empty-favorites": <PiHeartStraightThin size={100} />,
    "empty-search": <LiaSearchMinusSolid size={100} />,
    guest: <IoPersonCircleOutline size={100} />,
    error: <PiWarningCircleThin size={100} />,
  };

  const icon = icons[status];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 flex flex-col items-center justify-center py-20 rounded-md">
      <div className="text-zinc-300 dark:text-zinc-600">{icon}</div>
      <p>{desc || "Something went wrong, please try again later."}</p>
    </div>
  );
}

export default EmptyState;
