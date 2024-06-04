import { Spinner } from "@nextui-org/spinner";

interface Props {
  className?: string;
}

function LoadingState({ className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center py-32 bg-zinc-100 dark:bg-zinc-800 ${className}`}
    >
      <Spinner color="default" />
    </div>
  );
}

export default LoadingState;
