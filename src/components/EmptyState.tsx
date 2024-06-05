import { PiShoppingCartThin } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiWarningCircleThin } from "react-icons/pi";
import { PiHeartStraightThin } from "react-icons/pi";

type Status = "guest" | "empty-cart" | "empty-favorites";

interface Props {
  status: Status;
}

function EmptyState({ status }: Props) {
  const statusState = [
    {
      status: "empty-cart",
      icon: <PiShoppingCartThin size={100} />,
      description: "Your cart is empty, add some items to your cart.",
    },
    {
      status: "empty-favorites",
      icon: <PiHeartStraightThin size={100} />,
      description:
        "Your favorite list is empty, add some items to your favorite list.",
    },
    {
      status: "guest",
      icon: <IoPersonCircleOutline size={100} />,
      description: "Please login to access this feature.",
    },
  ];
  const errorState = {
    status: "Error",
    icon: <PiWarningCircleThin size={100} />,
    description: "Something went wrong, please try again later.",
  };

  const { icon, description } =
    statusState.find((state) => state.status === status) || errorState;

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 flex flex-col items-center justify-center py-20 rounded-md">
      <div className="text-zinc-300 dark:text-zinc-600">{icon}</div>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;
